import React from "react";

const CursoCard = ({ curso, seleccionado, onMatricular, estudiante }) => {
  return (
    <li className="curso-card">
      <div className="curso-info">
        <strong>{curso.nombre}</strong>
        <div className="codigo">({curso.codigo})</div>
      </div>

      <div className="curso-detalles">
        <span>Créditos: {curso.creditos}</span>
        <span>Cupos: {curso.limiteCupos - curso.matriculados}</span>
      </div>

      <div className="curso-acciones">
        <button
          className="matricular"
          onClick={() => onMatricular(curso)}
          disabled={
            !estudiante.matriculado || // inactivo
            seleccionado ||
            curso.matriculados >= curso.limiteCupos
          }>
          {!estudiante.matriculado
            ? "Inactivo"
            : seleccionado
            ? "Ya matriculado"
            : curso.matriculados >= curso.limiteCupos
            ? "Sin cupos"
            : "Matricular"}
        </button>
      </div>
    </li>
  );
};

export default CursoCard;
