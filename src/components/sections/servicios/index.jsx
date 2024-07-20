import { Icon } from "@iconify/react";
import "./style.scss";

const Servicios = () => {
  return (
    <section className="servicios">
      <h3>Nuestros servicios</h3>
      <div className="card">
        <Icon className="icon" icon="mdi:responsive" />
        <p>Diseño web adaptable a todos los dispositivos</p>
      </div>
      <div className="card">
        
        <Icon className="icon" icon="gridicons:customize" />
        <p>Diseño web personalizado</p>
      </div>
      <div className="card">
        <Icon className="icon" icon="material-symbols:search" />
        <p>Posicionamiento SEO</p>
      </div>
      <div className="servicio pw">
        <h3>Página web</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Turpis urna sit in erat. Suspendisse in et vulputate tempor. Pretium lacus sed quam faucibus aliquet et dictum. Fermentum viverra malesuada tellus velit ac.</p>
      </div>
      <div className="servicio lp">
        <h3>Landing page</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Turpis urna sit in erat. Suspendisse in et vulputate tempor. Pretium lacus sed quam faucibus aliquet et dictum. Fermentum viverra malesuada tellus velit ac.</p>
      </div>
    </section>
  );
};

export default Servicios;
