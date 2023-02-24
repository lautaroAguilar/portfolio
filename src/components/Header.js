import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <header className="Header">
        <h3 className="Logo"> Lautaro Aguilar </h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="About" spy={true} smooth={true} offset={-50} duration={500} >About</Link>
          </li>
          <li>
            <Link to="Works" spy={true} smooth={true} offset={50} duration={500}>Works</Link>
          </li>
          <li>
            <Link to="Contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
          </li>
        </ul>
        {/* <li>
          <Link to="/footer">footer</Link>
        </li> */}
      </header>
    </>
  );
}
