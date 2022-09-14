import React from "react";

import css from "./Inicio.module.css";

export default function Inicio() {
  return (
    <div className={css.container}>
      <div className={css.servicios}>
        <span>Hola soy Lautaro <br /> Front-End developer</span>
      </div>

      <div className={css.containerImg}>
        <div className={css.divImg}>
            <img className={css.img} src="" alt="" />
        </div>
      </div>
    </div>
  );
}
