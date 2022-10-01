import React from "react";

import css from "./Contact.module.css";

export default function Contact() {
  return (
    <div id="Contacto" className={css.container}>
      <h1>Contacto</h1>
      <div className={css.contact}>
        <div className={css.box}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="ejemplo@gmail.com" />
        </div>
        <div className={css.box}>
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder="Nombre" />
        </div>
        <div className={css.box}>
          <label htmlFor="">Mensaje</label>
          <textarea placeholder="¡Hola! Quiero contactarme con vos porque" />
        </div>
      </div>
    </div>
  );
}
