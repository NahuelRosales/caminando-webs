import Button from "../../../commons/Button";
import "./style.scss";

const Contacto = () => {
  return (
    <section className="contacto">
      <div>
        <h3>Contactanos</h3>
        <div>
          <p>+5411125645</p>
        </div>
        <div>
          <p>caminandomailing@gmail.com</p>
        </div>
      </div>
      <div id="after_submit"></div>
      <form
        id="contact_form"
        action="#"
        method="POST"
        className="formulario"
        encType="multipart/form-data"
      >
        <div className="row">
          <label className="required" htmlFor="name">
            Tu nombre:
          </label>
          <input
            id="name"
            className="input"
            name="name"
            type="text"
            value=""
            size="30"
          />

          <span id="name_validation" className="error_message"></span>
        </div>
        <div className="row">
          <label className="required" htmlFor="email">
            Your email:
          </label>
          <input
            id="email"
            className="input"
            name="email"
            type="text"
            value=""
            size="30"
          />
          <br />
          <span id="email_validation" className="error_message"></span>
        </div>
        <div className="row">
          <label className="required" htmlFor="message">
            Your message:
          </label>
          <br />
          <textarea
            id="message"
            className="input"
            name="message"
            rows="7"
            cols="30"
          ></textarea>
          <br />
          <span id="message_validation" className="error_message"></span>
        </div>

        <input id="submit_button" type="submit" value="Send email" />
      </form>
    </section>
  );
};

export default Contacto;
