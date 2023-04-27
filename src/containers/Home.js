import { React, useState } from "react";
import "../assets/css/Home.css";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../assets/media/logo.png"

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="Home">
        <div className="Box">
          <motion.header
            className="Header"
            initial={{ y: `-50vh` }}
            animate={{ y: 0 }}
            transition={{ type: `spring`, duration: 6, bounce: 0.1 }}
          >
            <div className="hMb">
              <img className="logo" src={logo} alt="logo de la aplicación" />
              <div className="menu-icon" onClick={handleShowNavbar}>
                <AiOutlineMenu />
              </div>
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={30}
                    duration={500}
                  >
                    Sobre Mí
                  </Link>
                </li>
                <li>
                  <Link
                    to="Works"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={600}
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={40}
                    duration={700}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </motion.header>

          <motion.div
            className="Box__texts"
            initial={{ x: `-180vh` }}
            animate={{ x: 0 }}
            transition={{ type: `spring`, duration: 6, bounce: 0.2 }}
          >
            <div className="copys">
              <h2 className="Title">Hola, soy Lautaro</h2>
              <p>
                Diseñador UX/UI y desarrollador web frontend. Busco crear buenas
                experiencias digitales para el usuario.
              </p>
            </div>
            <a className="CTA" href="mailto:eley.aramis@gmail.com?subject=Contacto desde el portfolio de Lautaro&body=Escriba su mensaje aquí" target="_blank">Contactar</a>
          </motion.div>
          <motion.ul
            className="linksRedes"
            initial={{ x: `-180vh` }}
            animate={{ x: 0 }}
            transition={{ type: `spring`, duration: 6, bounce: 0.1 }}
          >
            <li>
              <a
                href="https://www.linkedin.com/in/lautaro-aguilar-83a3a923b/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/lautaroaguilar2" target="_blank"
              rel="noreferrer"
              >
                Behance
              </a>
            </li>
            <li>
              <a href="https://github.com/lautaroAguilar" target="_blank"
              rel="noreferrer"
              >
                Github
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
}
