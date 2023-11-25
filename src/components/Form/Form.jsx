import React, { useState } from "react";
import validation from "../../utils/validations";
import "./Form.css"

export default function Form(props) {

   

    const [userData, setUserData] = useState({
        mail:"",
        password:"",
    })

    const [errors, setErrors] = useState({
        mail:" ",
        password:"",
    });

    const handleChange =(event) => {

        const {name, value} = event.target;

        setUserData({
            ...userData,
            [name]: value,
        })

        setErrors(validation({
            ...userData,
            [name]: value,
        }))

    }

    const handleSubmit = (event) => {

        event.preventDefault()

        props.login(userData);
    }

  return (
    <div id="div-principal">
      <img id="title-form" src="src/img/name_form.png" alt="rick_morty_title"/>
      <img id="img-form" src="src/img/rick_lading.jpeg" alt="rick_landing"/>
      <div id="form-div">
      <form id="form" onSubmit={handleSubmit}>
        <div class="div-label">
        <label id="label-form">Email: </label>
        <input type="text" id="input-form" name="mail" value={userData.mail} onChange={handleChange} placeholder="Ingresa tu Email"></input>
        <p>{errors.mail ? errors.mail : null}</p>
        </div>
        <div class="div-label">
        <label id="label-form">Password: </label>
        <input type="password" id="input-form" name="password" value={userData.password} onChange={handleChange} placeholder="Ingresa tu Password"></input>
        <p>{errors.password ? errors.password : null}</p>
        </div>
        <div class="div-label">
        <button id="boton-form" disabled={errors.mail || errors.password} type="submit">Enviar</button>
        </div>
      </form>
      </div>
    </div>
  );
}
