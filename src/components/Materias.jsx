import React, { Component } from "react";

class Materias extends Component {
  render() {
    return (
      <div className="forms-container">
        <div className="materias-container">
          <h4 className="materias-header">Materias</h4>
          <table>
            <thead>
              <tr>
                <th>Clave</th>
                <th>Materia</th>
                <th>Hora</th>
                <th>Grupo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="materias-container">
          <h4 className="materias-header">Horario</h4>
          <table>
            <thead>
              <tr>
                <th>Clave</th>
                <th>Materia</th>
                <th>Hora</th>
                <th>Grupo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Materias;
