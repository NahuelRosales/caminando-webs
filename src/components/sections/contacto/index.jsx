import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";

import "./style.scss";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fy0curq", "template_3mtk44g", form.current, {
        publicKey: "KyYHjzaqfguwNM_Nc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contacto">
      <div className="contact-box">
        <h3>Contactanos</h3>
        <div className="container">
          <Icon className="icon phone" icon="ph:phone-light" />
          <p>+5411125645</p>
        </div>
        <div className="container">
          <Icon className="icon mail" icon="octicon:mail-24" />
          <p>caminandomailing@gmail.com</p>
        </div>
      </div>
      <form className="formulario" ref={form} onSubmit={sendEmail}>
        <label>Tu nombre:</label>
        <input className="input" type="text" name="user_name" />
        <label>Tu email:</label>
        <input className="input" type="email" name="user_email" />
        <label>Dejanos tu consulta:</label>
        <textarea className="input textarea" name="message" />
        <input className="button-send" type="submit" value="ENVIAR" />
      </form>
    </section>
  );
};

export default Contacto;
