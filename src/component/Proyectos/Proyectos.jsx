import React from "react";

import css from "./Proyectos.module.css";

export default function Proyectos() {
  return (
    <div id="Proyectos" className={css.Proyectos}>
      <h1>Proyectos</h1>

      <div className={css.containerProyectos}>
        <div className={css.card}></div>
        <div className={css.card}></div>
        <div className={css.card}></div>
      </div>
    </div>
  );
}
