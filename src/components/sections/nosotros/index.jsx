import hostelBackpackersImg from "../../../../public/hostelBackpackersImg.png";
import "./style.scss";

const Nosotros = () => {
  return (
    <section className="nosotros">
      <h3>Sobre nosotros</h3>
      <div className="img">
        <img src={hostelBackpackersImg} />
      </div>
      <div className="presentacion">
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Turpis urna sit in erat.
          Suspendisse in et vulputate tempor. Pretium lacus sed quam faucibus
          aliquet et dictum. Fermentum viverra malesuada tellus velit ac.
        </p>
      </div>
      <div className="perfil nauwu">
        <div className="img">
          <img src={hostelBackpackersImg} />
        </div>
        <p>
          Desarrollador Full Stack <br />
          Diseñador UX-UI
        </p>
      </div>
      <div className="perfil cami">
        <div className="img">
          <img src={hostelBackpackersImg} />
        </div>
        <p>
          Licenciada en Psicología <br />
          Diseñadora UX-UI
        </p>
      </div>
    </section>
  );
};

export default Nosotros;
