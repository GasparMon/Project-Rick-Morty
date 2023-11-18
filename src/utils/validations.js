export default function validation(input) {

    const errors = {}

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])/;

    if(!input.mail.length) errors.mail = "Debes de ingresar un Email"
    else{
        if(!regexEmail.test(input.mail)) errors.mail = "Debes de ingresar un Email Valido"
        if(input.mail.length > 35) errors.mail = "El Email debe contener menos de 35 caracteres"
    }

    if(!input.password.length) errors.password = "Debes de ingresar un Password"
    else{
        if(!regexPassword.test(input.password)) errors.password = "Debes de ingresar un Password Valido"
        if(input.password.length < 5) errors.password = "El Password debe contener al menos 5 caracteres"
        if(input.password.length > 10) errors.password = "El Password no debe ser mayor a 10 caracteres"
    }

    return errors;
}
