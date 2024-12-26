import { Icon } from "@iconify/react";
import "./style.scss";

const Servicios = () => {
  return (
    <section className="servicios">
      <h3>Nuestros servicios</h3>
      <div className="card">
        <Icon className="icon" icon="gridicons:customize" />
        <h1>Diseño personalizado</h1>
        <p>
          Somos expertos en diseño, y trabajaremos junto a ti para crear un
          sitio a medida, adaptado a tus necesidades
        </p>
      </div>
      <div className="card">
        <Icon className="icon" icon="material-symbols:search" />
        <h1>Posicionamiento SEO</h1>
        <p>
          Aplicamos estrategias efectivas para maximizar la visibilidad y
          mejorar el posicionamiento de tu página en línea
        </p>
      </div>
      <div className="card">
        <Icon className="icon" icon="mdi:responsive" />
        <h1>Responsive Design</h1>
        <p>
          Tu sitio podrá verse en todo tipo de dispositivos y pantallas,
          garantizando una experiencia de usuario óptima y accesible
        </p>
      </div>
      <div className="servicio pw">
        <h3>Landing Page</h3>
        <p>
          Se trata de una página web con un único propósito:{" "}
          <p className="bold">captar clientes.</p>
          <br />
          <br /> A través del sitio se guía al visitante a realizar una acción,
          como comprar un producto, suscribirse a un servicio, o ponerse en
          contacto contigo.
          <br />
          <br />
          ¿Quieres mostrar tu trabajo y que los clientes te encuentren
          <p className="italic"> fácilmente</p>? ¡Una landing page es perfecta
          para ti!
        </p>
      </div>
      <div className="servicio lp">
        <h3>Sitio web</h3>
        <p>
          Los sitios web se caracterizan principalmente por contener diversas
          secciones y enlaces.<br />
          <br />Es más <p className="bold">complejo y estructurado</p> pero <p className="italic">esencial </p>
          para empresas y emprendimientos que deseen brindar una presencia en
          línea con información más detallada de sus productos o servicios.
        </p>
      </div>
    </section>
  );
};

export default Servicios;
