import React from "react";

import css from "./About.module.css";

export default function About() {
  return (
    <div id="About" className={css.About}>
      <h1>Sobre mí</h1>
      <section className={css.conatiner}>
        <div className={css.conatinerMe}>
          <span>¿Quién soy?</span>
        </div>

        <div className={css.conatinerSkill}>
          <h4>Skills</h4>
          <h3>Front-End</h3>
        </div>
      </section>
    </div>
  );
}
