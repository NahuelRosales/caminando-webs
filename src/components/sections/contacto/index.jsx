import { useRef } from "react";
import emailjs from "@emailjs/browser";

/* import Button from "../../../commons/Button"; */
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
      <form ref={form} onSubmit={sendEmail}>
        <label>Tu nombre:</label>
        <input type="text" name="user_name" />
        <label>Tu email:</label>
        <input type="email" name="user_email" />
        <label>Dejanos tu consulta...</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contacto;
