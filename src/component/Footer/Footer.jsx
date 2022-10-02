import React from "react";

import css from "./Footer.module.css";

import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={css.footer}>
      <section className={css.copyright}>
        <p>Pagina Creada Por Lautaro Perez</p>
        <p>© 2022. All Rights Reserved.</p>
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
