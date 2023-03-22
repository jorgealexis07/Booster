import React from "react";
import "../css/formContacto.css";
export default function formContacto() {
  return (
    <div class="contact-form">
      <form>
        <label for="name">Nombre:</label>
        <input type="text" required="" />
        <label for="email">Correo:</label>
        <input type="email" id="email" name="email" required="" />
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" required=""></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
