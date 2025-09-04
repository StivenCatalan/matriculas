import React from "react";
import cursos from "../data/cursos.json";
import estudiante from "../data/estudiantes.json";
import CursoCard from "./curso_card";
import Matricula from "./matricula";
import { useMatricula } from "../hooks/use_matricula";

const ListaCursos = () => {
  const {
    seleccionados,
    confirmada,
    handleMatricular,
    handleQuitar,
    handleConfirmar,
    handleEliminar,
  } = useMatricula(estudiante);

  return (
    <div className="lista-cursos">
      <h2>Cursos disponibles para {estudiante.nombre}</h2>

      <p
        className={`estado-estudiante ${
          estudiante.matriculado ? "activo" : "inactivo"
        }`}
      >
        {estudiante.matriculado ? "Matriculado" : "No matriculado"}
      </p>

      {confirmada ? (
        <div className="confirmacion-final">
          <h3>Matrícula confirmada</h3>
          <Matricula
            seleccionados={seleccionados}
            estudiante={estudiante}
            onQuitar={null}
          />
          <button className="btn-eliminar" onClick={handleEliminar}>
            Eliminar matrícula
          </button>
        </div>
      ) : (
        <>
          <ul>
            {cursos
              .filter((curso) => curso.semestre === estudiante.semestre)
              .map((curso) => (
                <CursoCard
                  key={curso.id}
                  curso={curso}
                  seleccionado={seleccionados.some((c) => c.id === curso.id)}
                  onMatricular={handleMatricular}
                  estudiante={estudiante}
                />
              ))}
          </ul>

          <Matricula
            seleccionados={seleccionados}
            estudiante={estudiante}
            onQuitar={handleQuitar}
          />

          {seleccionados.length > 0 && (
            <button className="btn-confirmar" onClick={handleConfirmar}>
              Confirmar matrícula
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ListaCursos;
