import React from "react";
import { Slider } from "../components/Slider";
import slides from "../assets/media/img.json";

import "../assets/css/Works.css"

export default function Works() {
  return (
    <>
      <div className="Works Container">
        <div className="texts">
          <h3>Proyectos</h3>
          <p>Estos son proyectos con los que fui formándome, algunos son simples prácticas y otros tienen una complejidad mayor.</p>
        </div>
        <div className="swiperContainer">
          <Slider slides={slides} />
        </div>
      </div>
    </>
  );
}
