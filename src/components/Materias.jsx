import PropTypes from "prop-types";

const Materias = (props) => {
  return (
    <>
      <div className="materias-container">
        <h2 className="materias-header">Materias</h2>
        <table>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Materia</th>
              <th>Hora</th>
              <th>Grupo</th>
            </tr>
          </thead>
          {props.materias.map((m, idx) => (
            <tbody key={idx}>
              <tr>
                <td>{m.key}</td>
                <td>{m.subject}</td>
                <td>{m.hour}</td>
                <td>{m.class}</td>
                <td>
                  <button
                    onClick={() => props.agregar(m)}
                    className="materias-button"
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Materias;

Materias.propTypes = {
  key: PropTypes.string,
  subject: PropTypes.string,
  hour: PropTypes.string,
  class: PropTypes.string,
};
