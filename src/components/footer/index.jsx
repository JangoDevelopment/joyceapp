import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaCoffee } from "react-icons/fa";
import "./styles.css";

const Footer = (props) => {
    return (
        <footer className="footer flex">
            <div className="block address flex-column">
                <p>Rua Monsenhor Aníbal de Melo, n 206</p>
                <p>Pedregulho</p>
                <p>Guaratingueta, Sao Paulo</p>
            </div>
            <div className="block contact flex-column">
                <div className="coffee flex link">
                    <p>Vamos tomar um café?</p>
                    <FaCoffee className="coffee_icon" />
                </div>
                <p>joy.cacador@gmail.com</p>
                <p>
                    <span>(12)</span> 9 8147 - 0468
                </p>
            </div>
            <div className="block info flex-column">
                <div className="flex icons">
                    <AiOutlineInstagram className="icon link" />
                    <FaFacebookSquare className="icon link" />
                </div>
                <p>
                    © 2020 - <span className="link">Joyce Caçador</span>
                </p>
                <p>
                    Made with love by <span className="link">Jango</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;