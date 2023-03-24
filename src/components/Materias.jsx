import React, { Component } from "react";
import PropTypes from "prop-types";

class Materias extends Component {
  constructor() {
    super();
    this.state = {
      materias: {
        key: "",
        subject: "",
        hour: "",
        class: "",
      },
      horario: [],
      desactivado: false,
    };
  }

  render() {
    const materias = [
      {
        key: "AEB-1011",
        subject: "Desarrollo de aplicaciones móviles",
        hour: "18:00-17:00",
        class: "C7A",
      },
      {
        key: "AEB-1055",
        subject: "Programación web",
        hour: "14:00-15:00",
        class: "C7A",
      },
      {
        key: "SCD-1016",
        subject: "Lenguajes y Autómatas 2",
        hour: "16:00-17:00",
        class: "C7A",
      },
      {
        key: "ACA-0909",
        subject: "Taller de investigación I",
        hour: "13:00-14:00",
        class: "C7A",
      },
      {
        key: "AEB-1011",
        subject: "Desarrollo de aplicaciones móviles",
        hour: "16:00-17:00",
        class: "C7B",
      },
      {
        key: "AEB-1055",
        subject: "Programación web",
        hour: "17:00-18:00",
        class: "C7B",
      },
      {
        key: "SCD-1016",
        subject: "Lenguajes y Autómatas 2",
        hour: "15:00-16:00",
        class: "C7B",
      },
      {
        key: "ACA-0909",
        subject: "Taller de investigación I",
        hour: "14:00-15:00",
        class: "C7B",
      },
    ];

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
            {materias.map((m, idx) => (
              <tbody>
                <tr key={idx}>
                  <td>{m.key}</td>
                  <td>{m.subject}</td>
                  <td>{m.hour}</td>
                  <td>{m.class}</td>
                  <td>
                    <button
                      onClick={() => this.agregar(m.key)}
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
  }
}

export default Materias;

Materias.propTypes = {
  key: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
};
