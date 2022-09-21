import React from "react";

import css from "./About.module.css";

export default function About() {
  return (
    <div className={css.conatiner}>
      <div className={css.conatinerImg}>
        <img className={css.img} src="https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Clipart.png" alt="" />
      </div>

      <div className={css.conatinerAbout}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          veritatis ipsa illum maiores nesciunt error voluptatem repellat iusto?
          Eveniet, excepturi doloremque. Praesentium, quis consequuntur? Quae,
          animi. Aspernatur, vitae iusto! Id.
        </p>
      </div>
    </div>
  );
}
