import React from "react";

import css from "./Proyectos.module.css";

import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import StarCards from "../../../img/StarCards.png";
import Food from "../../../img/Food.png";
import Proximamente from "../../../img/Proximamente.jpg";

export default function Proyectos() {
  return (
    <div id="Proyectos" className={css.Proyectos}>
      <h1>Proyectos</h1>
      <div className={css.containerProyectos}>
        <div className={css.card}>
          <section className={css.cardTop}>
            <img className={css.img} src={StarCards} />
            <div className={css.hover}>
              <div className={css.deploy}>
                <a href="https://starcards.vercel.app/" target="_blank">
                  <BsBoxArrowUpRight />
                </a>
                <a
                  href="https://github.com/4ldito/Henry-PG-StarCards"
                  target="_blank"
                >
                  <BsGithub />
                </a>
              </div>
              <ul className={css.tecnologys}>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>NodeJs</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>Express</li>
                <li>Socket.io</li>
                <li>Passport</li>
                <li>Firebase</li>
                <li>+More</li>
              </ul>
            </div>
          </section>
          <section>
            <span className={css.title}>Starcards</span>
            <span className={css.text}>
              Proyecto desarrollado en grupo de 7 personas. Es un juego web de
              cartas basado en el mundo Starcraft, consta de su propio sistema
              de monetización y e-commerce incorporado. Puedes chatear con tus
              amigos en un chat tanto público como privado, coleccionar cartas o
              vender las que no te gusten, crear tus propios mazos ¡y mucho más!
            </span>
          </section>
        </div>

        <div className={css.card}>
          <section className={css.cardTop}>
            <img className={css.img} src={Food} />
            <div className={css.hover}>
              <div className={css.deploy}>
                <a href="https://pi-food-pi.vercel.app/" target="_blank">
                  <BsBoxArrowUpRight />
                </a>
                <a
                  href="https://github.com/lauty-shock/PI-Food"
                  target="_blank"
                >
                  <BsGithub />
                </a>
              </div>
              <ul className={css.tecnologys}>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>NodeJs</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>Express</li>
              </ul>
            </div>
          </section>
          <section>
            <span className={css.title}>Food</span>
            <span className={css.text}>
              Blog de comidas donde podras encontrar recetas de todos los tipos
              de dietas, filtrar por los puntos de salud, dietas y orden
              alfabetico, también cuenta con un buscador de comidas y un
              formulario para que puedas agregar tu propia receta ¿Qué comerás
              esta vez?
            </span>
          </section>
        </div>

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
