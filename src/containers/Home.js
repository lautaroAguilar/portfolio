import React from "react";
import "../assets/css/Home.css";
import Header from "../components/Header";

export default function Home() {
  /* const Home = getElementByClassName(`Home`); */

  return (
    <>
      <div className="Home">
        <div className="Box">
          <Header></Header>
          <div className="Box__texts">
            <h2 className="Title">Hola, soy Lautaro</h2>
            <p>
              Diseñador UX/UI y desarrollador web. Busco crear buenas
              experiencias digitales para el usuario.
            </p>
            <button className="CTA">
              <a>Contactar</a>
            </button>
          </div>
          <ul className="linksRedes">
            <li>
              <a href="https://www.behance.net/" target="_blank">
                Behance
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/shots" target="_blank">
                Dribbble
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/feed/" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
