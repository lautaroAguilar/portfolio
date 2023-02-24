import React from "react";
import "../assets/css/About.css"
/* import headBear from "../assets/media/.jpg" */



export default function About() {
  return (
    <>
      <div id="About" className="About Container">
        <div className="info">
          <div className="info__headBear">
            {/* <img src={headBear} alt="ilustracion de la cabeza de un oso." /> */}
          </div>
          <div className="info__texts">
            <p>
              Argentino, criado en Buenos Aires. Desde chico tuve curiosidad por
              el diseño y la creación en general. Pero cuando conocí el mundo
              web y digital, mi perspectiva cambió.
            </p>
            <p>
              Desde ese momento me enfoqué en dominar la mayor cantidad de
              herramientas digitales, y así poder crear soluciones y
              experiencias de calidad.
            </p>
            <p>
              Va a ser largo, eso lo tengo claro. Pero cuando uno se propone un
              objetivo y traza un plan para lograrlo, puede cumplirlo. Y voy por
              buen camino.
            </p>
          </div>
        </div>
        <div className="someTech">
          <div className="someTech__title">
            <h3>Algunas tecnologías que domino:</h3>
          </div>
          <div className="someTech__logos">
            <div className="someTech__logos--container">
              {/* <img src={imgJs} alt="" /> */}
            </div>
            <div className="someTech__logos--container">
              {/* <img src={imgReact} alt="" /> */}
            </div>
            <div className="someTech__logos--container">
              {/* <img src={imgHTML} alt="" /> */}
            </div>
            <div className="someTech__logos--container">
              {/* <img src={imgCSS} alt="" /> */}
            </div>
            <div className="someTech__logos--container">
              {/* <img src={imgGit} alt="" /> */}
            </div>
            <div className="someTech__logos--container">
              {/* <img src={imgFigma} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
