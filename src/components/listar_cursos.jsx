import React, { useState } from "react";
import cursos from "../data/cursos.json";
import estudiante from "../data/estudiantes.json";
import CursoCard from "./curso_card";
import ResumenMatricula from "./matricula";
import '../styles/listar_cursos.scss'

const ListaCursos = () => {
  const [seleccionados, setSeleccionados] = useState([]);

  // 👉 matricular curso
  const handleMatricular = (curso) => {
    if (seleccionados.some((c) => c.id === curso.id)) return;

    const totalCreditos = seleccionados.reduce((acc, c) => acc + c.creditos, 0);
    if (totalCreditos + curso.creditos > estudiante.creditosPermitidos) {
      alert("Has superado el límite de créditos permitidos.");
      return;
    }

    setSeleccionados([...seleccionados, curso]);
  };

  // 👉 quitar curso
  const handleQuitar = (id) => {
    const actualizados = seleccionados.filter((curso) => curso.id !== id);
    setSeleccionados(actualizados);
  };

  return (
    <div className="lista-cursos">
      <h2>Cursos disponibles para {estudiante.nombre}</h2>
      <ul>
        {cursos.map((curso) => (
          <CursoCard
            key={curso.id}
            curso={curso}
            seleccionado={seleccionados.some((c) => c.id === curso.id)}
            onMatricular={handleMatricular}
          />
        ))}
      </ul>

      {/* Resumen separado */}
      <ResumenMatricula
        seleccionados={seleccionados}
        estudiante={estudiante}
        onQuitar={handleQuitar}
      />
    </div>
  );
};

export default ListaCursos;
