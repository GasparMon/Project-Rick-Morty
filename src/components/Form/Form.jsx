import React, { useState } from "react";
import validation from "../../utils/validations";

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
    <div>
      <form id="form" onSubmit={handleSubmit}>

        <label>EMail: </label>
        <input type="text" id="mail" name="mail" value={userData.mail} onChange={handleChange} placeholder="Ingresa tu Email"></input>
        <p>{errors.mail ? errors.mail : null}</p>
        <br/>
        <label>Password: </label>
        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} placeholder="Ingresa tu Password"></input>
        <p>{errors.password ? errors.password : null}</p>
        <br/>
        <button disabled={errors.mail || errors.password} type="submit">Enviar</button>
        
      </form>
    </div>
  );
}
