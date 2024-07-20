import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../../commons/Button";
import "./style.scss";

const Inicio = () => {
  return (
    <section className="inicio">
      <h2 className="title">¿Quieres llegar a más clientes?</h2>
      <h2 className="sub-title">
        Potencia tu negocio con una página web, nosotros la diseñamos y ayudamos
        a <br />
        que <p>tu negocio crezca</p>
      </h2>
      <Button text={"COTIZA AHORA"} />
      <Icon className="scroll-down-link" icon="iconoir:fast-arrow-down" />
    </section>
  );
};

export default Inicio;
