import React from "react";

import css from "./Proyectos.module.css";

import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import Proyect from "./Proyect.js";

import StarCards from "../../../img/StarCards.png";
import Food from "../../../img/Food.png";
import Proximamente from "../../../img/Proximamente.jpg";

export default function Proyectos() {
  return (
    <div id="Proyectos" className={css.Proyectos}>
      <h1>Proyectos</h1>
      <div className={css.containerProyectos}>
        {Proyect?.map((proyecto) => (
          <div className={css.card}>
            <div className={css.cardTop}>
              <img className={css.img} src={proyecto.img} />
              <div className={css.hover}>
                <div className={css.deploy}>
                  <a href={proyecto.deploy} target="_blank">
                    <BsBoxArrowUpRight />
                  </a>
                  <a href={proyecto.github} target="_blank">
                    <BsGithub />
                  </a>
                </div>
                <div className={css.tecnologys}>
                  {proyecto.tecnologys.map((t) => (
                    <p>{t}</p>
                  ))}
                </div>
              </div>
            </div>
            <section>
              <span className={css.title}>{proyecto.name}</span>
              <span className={css.text}>{proyecto.text}</span>
            </section>
          </div>
        ))}

        <div className={css.card}>
          <section className={css.cardTop}>
            <img className={css.img} src={Proximamente} />
          </section>
          <section>
            <span className={css.title}>Próximamente</span>
          </section>
        </div>
      </div>
    </div>
  );
}
