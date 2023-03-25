import React from "react";

const Horario = (props) => {
  return (
    <>
      <div className="materias-container">
        {props.horario.length === 0 ? (
          <h2 className="materias-header">No tienes materias</h2>
        ) : (
          <>
            <h2 className="materias-header">
              Mi horario: {props.horario.length} materias
            </h2>
            <table>
              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Materia</th>
                  <th>Hora</th>
                  <th>Grupo</th>
                </tr>
              </thead>
              {props.horario.map((h, index) => (
                <tbody>
                  <tr key={index}>
                    <td>{h.key}</td>
                    <td>{h.subject}</td>
                    <td>{h.hour}</td>
                    <td>{h.class}</td>
                    <td>
                      <button
                        onClick={() => props.eliminar(h)}
                        className="horario-button"
                      >
                        -
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default Horario;
