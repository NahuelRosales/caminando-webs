import nosotrosImg from "/nosotrosImg.png";
import nauwuImg from "/nauwuImg.jpg";
import camiImg from "/camiImg.jpg";
import "./style.scss";

const Nosotros = () => {
  return (
    <section className="nosotros">
      <h3>Sobre nosotros</h3>
      <div className="img">
        <img src={nosotrosImg} />
      </div>
      <div className="presentacion">
        <p>
          Fue en mayo de 2024 que decidimos comenzar nuestro viaje juntos.{" "}
          <br />
          <br /> Nos armamos con una mochila, laptop y ansias por aprender.
          Decidimos convertirnos en nómadas digitales tras varios años de
          estudios y experiencias que nos llevaron a dar este gran paso.
          <br />
          <br />
          Creemos que un sitio web debe ser{" "}
          <p className="bold">accesible e intuitivo</p> para todos los usuarios.
          Con nuestra formación en Psicología, desarrollo web y diseño UX/UI,
          estamos completamente preparados para crear experiencias digitales que
          cumplan con este objetivo.
        </p>
      </div>
      <div className="perfil nauwu">
        <div className="img">
          <img src={nauwuImg} />
        </div>
        <p>Nahuel Rosales</p>
        <p className="description">
          Desarrollador Full Stack <br />
          Diseñador UX-UI
        </p>
      </div>
      <div className="perfil cami">
        <div className="img">
          <img src={camiImg} />
        </div>
        <p>Camila Gilburt</p>

        <p className="description">
          Licenciada en Psicología <br />
          Diseñadora UX-UI
        </p>
      </div>
    </section>
  );
};

export default Nosotros;
