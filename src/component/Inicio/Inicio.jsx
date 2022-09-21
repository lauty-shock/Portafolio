import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import css from "./Inicio.module.css";

export default function Inicio() {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Back-End Developer", "FullStack Developer"],
    loop: 0,
  });
  return (
    <div className={css.container}>
      <section className={css.containerName}>
        <span className={css.name}>Lautaro Perez</span>
        <span className={css.servicios}>
          {text}
          <Cursor />
        </span>
      </section>
      <button className={css.btn}>Más sobre mi</button>
    </div>
  );
}
