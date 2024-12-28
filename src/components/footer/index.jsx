import { Icon } from "@iconify/react";
import Logo from "/logo.png";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <Icon className="icon phone" icon="ph:phone-light" />
        <Icon className="icon mail" icon="octicon:mail-24" />
        <Icon className="icon ig" icon="ri:instagram-line" />
      </div>
      <img src={Logo} alt="caminando-webs-logo" />
      <p className="rights">Sitio desarrollado por CAMINANDO WEBS</p>
    </footer>
  );
};

export default Footer;
