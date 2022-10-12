import React from "react";

import css from "./About.module.css";

import { Tool, Back, Front } from "./Tecnology";

export default function About() {
  return (
    <div id="About" className={css.About}>
      <h1>Sobre mí</h1>
      <section className={css.container}>
        <div className={css.containerMe}>
          <span className={css.title}>¿Quién soy?</span>
          <span className={css.text1}>
            ¡Hola Mundo! Mi nombre es Lautaro Perez y soy FullStack developer
          </span>

          <span className={css.text2}>
            Soy un apasionado por el mundo de la programación, siempre estoy
            viendo algún tipo de contenido relacionado con este mundo. <br />
            <br />
            Me oriento más hacia el Front-End y busco el conseguir más
            experiencia y aprender nuevas tecnologías para mejorar más en esta
            parte del mundo IT.
          </span>

          <span className={css.text3}>
            <span>Hobbies:</span> básquetbol, programación y viajar, entre
            otros.
          </span>
          <span className={css.text3}>
            <span>Desde:</span> Córdoba, Argentina
          </span>

          <a
            className={css.cv}
            href="CV-Lautaro-Cesar-Perez.pdf"
            download
          >
            Descargar CV
          </a>
        </div>

        <div className={css.containerMe}>
          <span className={css.title}>Skills</span>
          <span className={css.text4}>Front-End</span>
          <section className={css.skills}>
            {Front?.map((t, index) => (
              <div key={index} className={css.tecnology}>
                <img className={css.tecnologyImg} src={t.img} alt={t.name} />
                <h5>{t.name}</h5>
              </div>
            ))}
          </section>

          <span className={css.text4}>Back-End</span>
          <section className={css.skills}>
            {Back?.map((t, index) => (
              <div key={index} className={css.tecnology}>
                <img className={css.tecnologyImg} src={t.img} alt={t.name} />
                <h5>{t.name}</h5>
              </div>
            ))}
          </section>

          <span className={css.text4}>Herramientas</span>
          <section className={css.skills}>
            {Tool?.map((t, index) => (
              <div key={index} className={css.tecnology}>
                <img className={css.tecnologyImg} src={t.img} alt={t.name} />
                <h5>{t.name}</h5>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
