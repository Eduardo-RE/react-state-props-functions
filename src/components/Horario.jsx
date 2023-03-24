import React from "react";

const Horario = (props) => {
  return (
    <>
      <div className="materias-container">
        {this.state.horario.length === 0 ? (
          <h2 className="materias-header">No tienes materias</h2>
        ) : (
          <>
            <h2 className="materias-header">Horario</h2>
            <table>
              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Materia</th>
                  <th>Hora</th>
                  <th>Grupo</th>
                </tr>
              </thead>
              {props.materias.map((m, index) => (
                <tbody>
                  <tr key={index}>
                    <td>{m.key}</td>
                    <td>{m.subject}</td>
                    <td>{m.hour}</td>
                    <td>{m.class}</td>
                    <td>
                      <button
                        // onClick={() => props.eliminar(m.key)}
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
