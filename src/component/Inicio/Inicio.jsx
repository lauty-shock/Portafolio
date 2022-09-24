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
        <button className={css.btn}>
          <a href="#About">Más sobre mi</a>
        </button>
      </section>
      <section className={css.contac}>
        <a
          className={css.btnContac}
          href="https://github.com/lauty-shock"
          target="_blank"
        >
          <BsGithub />
        </a>
        <a
          className={css.btnContac}
          href="https://api.whatsapp.com/send?phone=+543517468699&text=Hola%20Lautaro!%20vi%20tu%20portfolio.."
          target="_blank"
        >
          <BsWhatsapp />
        </a>
        <a
          className={css.btnContac}
          href="https://www.linkedin.com/in/lautaroperez135/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className={css.btnContac}
          href="mailto:lautaroperez135@gmail.com"
          target="_blank"
        >
          <BsFillEnvelopeFill />
        </a>
      </section>
    </div>
  );
}
