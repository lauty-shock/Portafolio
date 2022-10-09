import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
      Swal.fire({
        // background: "black",
        border: "2px solid blue",
        // color: "white",
        title: "¡Error!",
        text: "Por favor complete con un email valido",
        icon: "error",
        timer: 3000,
      });
    } else if (!input.name || input.name.length < 4) {
      Swal.fire({
        background: "black",
        color: "white",
        title: "¡Error!",
        text: "Por favor complete con su nombre",
        icon: "error",
        timer: 3000,
      });
    } else if (input.mensaje.length < 8) {
      Swal.fire({
        background: "black",
        color: "white",
        title: "¡Error!",
        text: "Por favor complete con la razón de su comunicado",
        icon: "error",
        timer: 3000,
      });
    } else {
      axios.post("https://submit-form.com/nT4t6IoQ", input);

      setInput({
        email: "",
        name: "",
        mensaje: "",
      });

      Swal.fire({
        background: "rgb(100, 100, 100)",
        color: "white",
        title: "¡Aprecio su interes!",
        text: "¡Me comunicaré a la brevedad!",
        icon: "success",
        timer: 4000,
        timerProgressBar: true,
      });
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
