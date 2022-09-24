import React from "react";

import css from "./Proyectos.module.css";

import StarCards from "../../../img/StarCards.png";
import Food from "../../../img/Food.png";
import Proximamente from "../../../img/Proximamente.jpg";

export default function Proyectos() {
  return (
    <div id="Proyectos" className={css.Proyectos}>
      <h1>Proyectos</h1>

      <div className={css.containerProyectos}>
        <div className={css.card}>
          <img className={css.img} src={StarCards} />
          <span className={css.title}>Starcards</span>
          <span className={css.text}>
            Proyecto desarrollado en grupo de 7 personas. Es un juego web de
            cartas basado en el mundo Starcraft, consta de su propio sistema de
            monetización y e-commerce incorporado. Puedes chatear con tus amigos
            en un chat tanto público como privado, coleccionar cartas o vender
            las que no te gusten, crear tus propios mazos ¡y mucho más!
          </span>
        </div>

        <div className={css.card}>
          <img className={css.img} src={Food} />
          <span className={css.title}>Food</span>
          <span className={css.text}>
            Blog de comidas donde podras encontrar recetas de todos los tipos de
            dietas, filtrar por los puntos de salud, dietas y orden alfabetico,
            también cuenta con un buscador de comidas y un formulario para que
            puedas agregar tu propia receta ¿Qué comerás esta vez?
          </span>
        </div>

        <div className={css.card}>
          <img className={css.img} src={Proximamente} />
          <span className={css.title}>Próximamente</span>
          {/* <span className={css.text}>Próximamente</span> */}
        </div>
      </div>
    </div>
  );
}
