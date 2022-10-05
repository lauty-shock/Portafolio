import React from "react";

import css from "./About.module.css";

import html from "../../../img/html.svg";
import css3 from "../../../img/css.svg";
import javascript from "../../../img/javascript.svg";
import react from "../../../img/react.svg";
import redux from "../../../img/redux.svg";
import bootstrap from "../../../img/bootstrap.svg";

import express from "../../../img/express-original.svg";
import nodejs from "../../../img/nodejs.svg";
import sequelize from "../../../img/sequelize.svg";

import git from "../../../img/git.svg";
import thunder from "../../../img/thunder.png";

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
            experiencia y aprender nuevas tecnologías para mejorar
            más en esta parte del mundo IT.
          </span>

          <span className={css.text3}>
            <span>Edad:</span> 19
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
            href="../../../public/CV-Lautaro-Perez.pdf"
            download
          >
            Descargar CV
          </a>
        </div>

        <div className={css.containerMe}>
          <span className={css.title}>Skills</span>
          <span className={css.text4}>Front-End</span>
          <section className={css.skills}>
            <div className={css.tecnology}>
              <img className={css.tecnologyImg} src={html} alt="HTML" />
              <h5>HTML</h5>
            </div>

            <div className={css.tecnology}>
              <img className={css.tecnologyImg} src={css3} alt="CSS" />
              <h5>CSS</h5>
            </div>

            <div className={css.tecnology}>
              <img
                className={css.tecnologyImg}
                src={javascript}
                alt="JavaScript"
              />
              <h5>JavaScript</h5>
            </div>

            <div className={css.tecnology}>
              <img className={css.tecnologyImg} src={react} alt="React" />
              <h5>React</h5>
            </div>

            <div className={css.tecnology}>
              <img className={css.tecnologyImg} src={redux} alt="Redux" />
              <h5>Redux</h5>
            </div>

            <div className={css.tecnology}>
              <img
                className={css.tecnologyImg}
                src={bootstrap}
                alt="Bootstrap"
              />
              <h5>Bootstrap</h5>
            </div>
          </section>

          <span className={css.text4}>Back-End</span>
          <section className={css.skills}>
            <div className={css.tecnology}>
              <img className={css.tecnologyImg} src={express} alt="Express" />
              <h5>Express</h5>
            </div>
            <div className={css.tecnology}>
              <img className={css.tecnologyImg} src={nodejs} alt="Node Js" />
              <h5>Node Js</h5>
            </div>
            <div className={css.tecnology}>
              <img
                className={css.tecnologyImg}
                src={sequelize}
                alt="Sequelize"
              />
              <h5>Sequelize</h5>
            </div>
          </section>

          <span className={css.text4}>Herramientas</span>
          <section className={css.skills}>
            <div className={css.tecnology}>
              <img className={css.tecnologyImg} src={git} alt="Git" />
              <h5>Git</h5>
            </div>

            <div className={css.tecnology}>
              <img
                className={css.tecnologyImg}
                src={thunder}
                alt="Thunder client"
              />
              <h5>Thunder client</h5>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
