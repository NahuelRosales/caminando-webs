import "./App.css";
import Header from "./components/header";
import Contacto from "./components/sections/contacto";
import Inicio from "./components/sections/inicio";
import Nosotros from "./components/sections/nosotros";
import Proyectos from "./components/sections/proyectos";
import Servicios from "./components/sections/servicios";

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Servicios />
      <Proyectos />
      <Nosotros />
      <Contacto />
    </>
  );
}

export default App;
