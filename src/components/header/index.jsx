import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "/logo.png";

import "./style.scss";

const Header = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  return (
    <header className={`${showMenuBar ? "hiddenMenuBar" : "showMenuBar"}`}>
      <Icon
        className={`" icon " ${showMenuBar ? "hiddenMenuBar" : "showMenuBar"}`}
        icon="material-symbols-light:menu"
        onClick={() => setShowMenuBar(!showMenuBar)}
      />
      <nav className={` ${showMenuBar ? "menuBar" : "hiddenMenuBar"}`}>
        <div className="top-menu-bar">
          <Icon
            className="icon close-menu"
            icon="material-symbols-light:close"
            onClick={() => setShowMenuBar(!showMenuBar)}
          />
          <img src={Logo} alt="caminando-webs-logo" />
        </div>
        <ul>
          <li>
            <p>Servicios</p>
          </li>
          <li>
            <p>Proyectos</p>
          </li>
          <li>
            <p>Nosotros</p>
          </li>
          <li>
            <p>Contacto</p>
          </li>
        </ul>
      </nav>
      <img src={Logo} alt="caminando-webs-logo" />
    </header>
  );
};

export default Header;
