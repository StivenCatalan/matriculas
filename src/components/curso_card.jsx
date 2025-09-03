import React from "react";
const CursoCard = ({ curso, seleccionado, onMatricular }) => {
  return (
    <li className="curso-card">
      {/* Info principal */}
      <div className="curso-info">
        <strong>{curso.nombre}</strong>
        <div className="codigo">({curso.codigo})</div>
      </div>

      {/* Detalles */}
      <div className="curso-detalles">
        <span>Créditos: {curso.creditos}</span>
        <span>Cupos: {curso.limiteCupos - curso.matriculados}</span>
      </div>

      {/* Botón */}
      <div className="curso-acciones">
        <button
          className="matricular"
          onClick={() => onMatricular(curso)}
          disabled={seleccionado || curso.matriculados >= curso.limiteCupos}
        >
          {seleccionado
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
