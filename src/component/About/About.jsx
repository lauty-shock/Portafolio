import React from "react";

import css from "./About.module.css";

export default function About() {
  return (
    <div id="About" className={css.About}>
      <h1>Sobre mí</h1>
      <section className={css.container}>
        <div className={css.containerMe}>
          <span className={css.QuienSoy}>¿Quién soy?</span>
          <span className={css.text1}>
            ¡Hola Mundo! Mi nombre es Lautaro Perez y soy full stack developer
          </span>

          <span className={css.text2}>
            Soy un apasionado por el mundo
            de la programación, Siempre me gusto la idea de poder crear
            páginas y juegos desde la comodidad de una computadora. <br /> <br />
            Me oriento más hacia el Front-End y busco el aprender nuevas
            tecnologías y lenguajes para mejorar más y más en esta parte del mundo IT.
          </span>

          <span className={css.text3}><span>Edad:</span> 19</span>
          <span className={css.text3}><span>Hobbies:</span> básquetbol, programación y viajar, entre otros.</span>
          <span className={css.text3}><span>Desde:</span> Córdoba, Argentina</span>

          <button className={css.cv}>Descargar CV</button>
        </div>

        <div className={css.containerSkill}>
          <h4>Skills</h4>
          <h3>Front-End</h3>
        </div>
      </section>
    </div>
  );
}
