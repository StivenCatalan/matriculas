import React from "react";

const ResumenMatricula = ({ seleccionados, estudiante, onQuitar }) => {
  const totalCreditos = seleccionados.reduce((acc, c) => acc + c.creditos, 0);
  const creditosRestantes = estudiante.creditosPermitidos - totalCreditos;

  return (
    <div className="resumen">
      <h3>Cursos seleccionados:</h3>

      {seleccionados.length === 0 ? (
        <p>Aún no has seleccionado cursos</p>
      ) : (
        <>
          <p>
            Total créditos: {totalCreditos} / {estudiante.creditosPermitidos}
          </p>
          <p>Créditos restantes: {creditosRestantes}</p>

          <ul>
            {seleccionados.map((curso) => (
              <li key={curso.id}>
                {curso.nombre} - {curso.creditos} créditos
                <button onClick={() => onQuitar(curso.id)}>Quitar</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ResumenMatricula;
