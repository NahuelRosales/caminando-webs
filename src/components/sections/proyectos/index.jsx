import hostelBackpackersImg from "../../../../public/hostelBackpackersImg.png";
import "./style.scss";

const Proyectos = () => {
  return (
    <section className="proyectos">
      <h3>Proyectos</h3>
      <div className="img">
        <img src={hostelBackpackersImg} />
        <div className="textImg">Hostel Backpackers</div>
      </div>
      <div className="img">
        <img src={hostelBackpackersImg} />
        <div className="textImg">Hostel Backpackers</div>
      </div>
    </section>
  );
};

export default Proyectos;
