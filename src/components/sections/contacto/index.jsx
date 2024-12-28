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
          alert ( 'Mensaje enviado, responederemos su consulta a la brevedad :)' ) 
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert ( '¡Algo salió mal!' );
        }
      );
      e.target.reset();
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
        <input placeholder="Escribe tu nombre..." className="input" type="text" name="user_name" required />
        <label>Tu email:</label>
        <input placeholder="Escribe tu email..." className="input" type="email" name="user_email" required  />
        <label>Dejanos tu consulta:</label>
        <textarea placeholder="Escribe tu consulta..." className="input textarea" name="message" required  />
        <input className="button-send" type="submit" value="ENVIAR" />
      </form>
    </section>
  );
};

export default Contacto;
