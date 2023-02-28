import React from "react";
import {
  SlSocialBehance,
  SlSocialDribbble,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="box">
          <div className="box__texts">
            <h4>Gracias por su atención.</h4>
            <p>Creemos algo juntos.</p>
          </div>
          <button className="CTA">
            <a>Contactar</a>
          </button>
          <div className="copy__links">
            <p>© 2022 Lautaro Aguilar. Todos los derechos reservados. |</p>
            <div className="links">
              <div className="links__link">
                <a href="">
                  <SlSocialBehance />
                </a>
              </div>
              <div className="links__link">
                <a href="">
                  <SlSocialDribbble />
                </a>
              </div>
              <div className="links__link">
                <a href="">
                  <SlSocialLinkedin />
                </a>
              </div>
              <div className="links__link">
                <a href="">
                  <SlSocialGithub />
                </a>
              </div>
              <div className="links__link">
                <a href="">
                  <SlSocialInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
