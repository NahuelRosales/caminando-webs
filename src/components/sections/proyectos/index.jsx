
import hostelBackpackersImg from "/hostelBackpackersImg.png";
import puraVidaHospedajeImg from "/puraVidaHospedajeImg.png";
import "./style.scss";

const Proyectos = () => {
  return (
    <section className="proyectos">
      <h3>Proyectos</h3>

      <div className="proyecto">
        <a
          href="https://www.figma.com/design/g0lPJL602h4qVgJaa4y3vG/Hostel-packpackers?node-id=7-450&t=wVBC6zPFoCD2Vhii-1"
          target="_blank"
        >
          <img src={hostelBackpackersImg} />
          <div className="textImg">Hostel Backpackers</div>{" "}
        </a>
      </div>

      <div className="proyecto">
        <a
          href="https://nahuelrosales.github.io/PuraVida-Hospedaje/"
          target="_blank"
        >
          <img src={puraVidaHospedajeImg} />
          <p className="textImg">Pura Vida Hospedaje</p>
        </a>
      </div>
    </section>
  );
};

export default Proyectos;
