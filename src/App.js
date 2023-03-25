import { Component } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Horario from "./components/Horario";
import Materias from "./components/Materias";

class App extends Component {
  constructor() {
    super();
    this.state = {
      materias: [
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
      ],
      horario: [],
      desactivado: false,
    };
  }

  agregar = (m) => {
    this.setState({ horario: [...this.state.horario, m] });
    console.log(m);
  };

  eliminar = (h) => {
    const temporal = this.state.horario.filter((r, i) => r.key !== h.key);
    this.setState({ horario: temporal });
  };

  render() {
    return (
      <>
        <Header />
        <Banner />
        <div className="forms-container">
          <Materias agregar={this.agregar} materias={this.state.materias} />
          <Horario horario={this.state.horario} eliminar={this.eliminar} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
