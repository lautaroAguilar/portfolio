import { React, useEffect } from "react";
import {
  SlSocialBehance,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../assets/css/Footer.css";

export default function Footer() {
  const animation = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: `spring`,
          duration: 6,
          bounce: 0.1,
        },
      });
    }

    if (!inView) {
      animation.start({
        y: `+100vh`,
      });
    }
  });

  return (
    <>
      <div className="Footer" ref={ref}>
        <div className="box">
          <motion.div className="box__texts" animate={animation}>
            <h4>Gracias por su atención.</h4>
            <p>Creemos algo único juntos.</p>
          </motion.div>

          <motion.div animate={animation}>
            <a className="CTA" href="mailto:eley.aramis@gmail.com?subject=Contacto desde el portfolio de Lautaro&body=Escriba su mensaje aquí" target="_blank">Contactar</a>
          </motion.div>

          <motion.div className="copy__links" animate={animation}>
            <p>© 2023 Lautaro Aguilar. Todos los derechos reservados. |</p>
            <div className="links">
              <div className="links__link">
                <a href="https://www.linkedin.com/in/lautaro-aguilar-83a3a923b/" target="_blank"
                rel="noreferrer">
                  <SlSocialLinkedin />
                </a>
              </div>
              <div className="links__link">
                <a href="https://www.behance.net/lautaroaguilar2" target="_blank"
                rel="noreferrer">
                  <SlSocialBehance />
                </a>
              </div>
              <div className="links__link">
                <a href="https://github.com/lautaroAguilar" target="_blank"
                rel="noreferrer">
                  <SlSocialGithub />
                </a>
              </div>
              <div className="links__link">
                <a href="https://twitter.com/lautaroaramis" target="_blank"
                rel="noreferrer">
                  <SlSocialTwitter />
                </a>
              </div>
              <div className="links__link">
                <a href="https://www.instagram.com/_lautaroaguilar/" target="_blank"
                rel="noreferrer">
                  <SlSocialInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
