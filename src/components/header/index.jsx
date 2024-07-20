import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "/logo.png"

import "./style.scss";

const Header = () => {
    const [showMenuBar, setShowMenuBar] = useState(false);

    return (
        <header className={`${showMenuBar ? "hiddenMenuBar" : "showMenuBar"}`}>
            <Icon
                className={`" icon " ${
                    showMenuBar ? "hiddenMenuBar" : "showMenuBar"
                }`}
                icon="material-symbols-light:menu"
                onClick={() => setShowMenuBar(!showMenuBar)}
            />
            {showMenuBar ? <div className="bg"></div> : null}

            <nav className={` ${showMenuBar ? "menuBar" : "hiddenMenuBar"}`}>
                <div
                    className="top-menu-bar"
                >
                    <Icon
                        className="icon close-menu"
                        icon="material-symbols-light:close"
                        onClick={() => setShowMenuBar(!showMenuBar)}
                    />
                    <p className="title">Hostel Backpackers</p>
                </div>
                <ul>
                    <li>
                        <Icon className="icon" icon="fluent:home-24-regular" />
                        <p>Servicios</p>
                    </li>
                    <li>
                        <Icon className="icon" icon="lucide:bed" />
                        <p>Proyectps</p>
                    </li>
                    <li>
                        <Icon className="icon" icon="bx:map" />
                        <p>Nosotros</p>
                    </li>
                    <li>
                        <Icon className="icon" icon="solar:gallery-broken" />
                        <p>Contacto</p>
                    </li>
                    <li>
                        <Icon className="icon" icon="solar:gallery-broken" />
                        <p>Preguntas</p>
                    </li>
                </ul>
            </nav>
            <img src={Logo} alt="" />
        </header>
    );
};

export default Header;
