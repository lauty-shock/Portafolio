import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import css from "./Contact.module.css";

export default function Contact() {
  const [input, setInput] = useState({
    email: "",
    name: "",
    mensaje: "",
  });

  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function submit() {
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(input.email)) {
      swal(" ¡Error! ", " Por favor complete con un email valido ", "error");
    } else if (!input.name || input.name.length < 4) {
      swal(" ¡Error! ", " Por favor complete con su nombre ", "error");
    } else if (input.mensaje.length < 8) {
      swal(
        " ¡Error! ",
        " Por favor complete con la razón de su comunicado ",
        "error"
      );
    } else {
      axios.post("https://submit-form.com/nT4t6IoQ", input);

      setInput({
        email: "",
        name: "",
        mensaje: "",
      });

      swal(
        " ¡Aprecio su interes! ",
        " ¡Me comunicaré a la brevedad! ",
        "success"
      );
    }
  }
  return (
    <div id="Contacto" className={css.container}>
      <h1>Contacto</h1>
      <div className={css.contact}>
        <div className={css.box}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) => handleInput(e)}
            placeholder="ejemplo@gmail.com"
          />
        </div>
        <div className={css.box}>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleInput(e)}
            placeholder="Nombre"
          />
        </div>
        <div className={css.box}>
          <label htmlFor="">Mensaje</label>
          <textarea
            name="mensaje"
            value={input.mensaje}
            onChange={(e) => handleInput(e)}
            placeholder="¡Hola! Quiero contactarme con vos porque"
          />
        </div>

        <button className={css.submit} onClick={submit}>
          Enviar
        </button>
      </div>
    </div>
  );
}
