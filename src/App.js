import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Horario from "./components/Horario";
import Materias from "./components/Materias";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="forms-container">
        <Materias />
        <Horario />
      </div>
      <Footer />
    </>
  );
}

export default App;
