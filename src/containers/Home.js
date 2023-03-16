import React from "react";
import "../assets/css/Home.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";

export default function Home() {
  /*  */

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
            <h3 className="Logo"> Lautaro Aguilar </h3>

            {/* tengo que cambiar el color al toggler */}

            <Navbar collapseOnSelect expand="lg">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <ul>
                    <li>
                      <Nav.Link href="/">Inicio</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                      >
                        Sobre Mí
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        to="Works"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={600}
                      >
                        Proyectos
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={40}
                        duration={700}
                      >
                        Contacto
                      </Nav.Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
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
                Diseñador UX/UI y desarrollador web. Busco crear buenas
                experiencias digitales para el usuario.
              </p>
            </div>
            <a className="CTA">Contactar</a>
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
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/lautaroaguilar2" target="_blank">
                Behance
              </a>
            </li>
            <li>
              <a href="https://github.com/lautaroAguilar" target="_blank">
                Github
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
}
