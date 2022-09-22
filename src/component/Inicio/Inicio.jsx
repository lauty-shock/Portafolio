import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import css from "./Inicio.module.css";

import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Inicio() {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Back-End Developer", "FullStack Developer"],
    loop: 0,
  });
  return (
    <div id="Inicio" className={css.container}>
      <section className={css.border}>
        <section className={css.containerName}>
          <span className={css.name}>Lautaro Perez</span>
          <span className={css.servicios}>
            {text}
            <Cursor />
          </span>
        </section>
        <button className={css.btn}><a href="#About">Más sobre mi</a></button>
      </section>
      <section className={css.contac}>
        <button className={css.btnContac}>
          <BsGithub />
        </button>
        <button className={css.btnContac}>
          <BsWhatsapp />
        </button>
        <button className={css.btnContac}>
          <BsLinkedin />
        </button>
        <button className={css.btnContac}>
          <BsFillEnvelopeFill />
        </button>
      </section>
    </div>
  );
}
