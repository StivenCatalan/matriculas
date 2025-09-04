import { useState, useEffect } from "react";

export const useMatricula = (estudiante) => {
  const [seleccionados, setSeleccionados] = useState([]);
  const [confirmada, setConfirmada] = useState(false);

  //  Cargar matrícula guardada al iniciar
  useEffect(() => {
    const guardada = localStorage.getItem("matricula");
    if (guardada) {
      setSeleccionados(JSON.parse(guardada));
      setConfirmada(true);
    }
  }, []);

  const handleMatricular = (curso) => {
    if (!estudiante.matriculado) {
      alert("El estudiante no está activo en este periodo.");
      return;
    }

    if (seleccionados.some((c) => c.id === curso.id)) {
      alert("Ya seleccionaste este curso.");
      return;
    }

    const totalCreditos = seleccionados.reduce((acc, c) => acc + c.creditos, 0);
    if (totalCreditos + curso.creditos > estudiante.creditosPermitidos) {
      alert("No puedes superar los créditos permitidos.");
      return;
    }

    setSeleccionados((prev) => [...prev, curso]);
  };

  const handleQuitar = (id) => {
    setSeleccionados((prev) => prev.filter((c) => c.id !== id));
  };

  const handleConfirmar = () => {
    localStorage.setItem("matricula", JSON.stringify(seleccionados));
    setConfirmada(true);
    alert(" Matrícula confirmada y guardada.");
  };

  const handleEliminar = () => {
    localStorage.removeItem("matricula");
    setSeleccionados([]);
    setConfirmada(false);
    alert(" Matrícula eliminada. Puedes volver a empezar.");
  };

  return {
    seleccionados,
    confirmada,
    handleMatricular,
    handleQuitar,
    handleConfirmar,
    handleEliminar,
  };
};
