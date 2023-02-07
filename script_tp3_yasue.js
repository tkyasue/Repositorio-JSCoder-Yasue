const nombre = document.getElementById("nombre").value
const correo = document.getElementById("mail").value
const carrera = document.getElementById("carrera").value
const boton = document.getElementById("botnEnviar").value
const resultado = document.querySelector("resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault()
    let error = validarCampos()
    if (error[0]) {
        resultado.innerHTML = error[1]
        
    } else {
        resultado.innerHTML = "Solicitud enviada"
    }
});

const validarCampos = ()=>{
    let error = []
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido"
        return error
    } else if (email.value.length < 5 ||
        email.value.length> 40 || 
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1 ) {
            error[0] = true;
            error[1] = "El correo es invalido"
            return error
        
    } else if (carrera.value < 4 || carrera.value > 40){
        error[0] = true;
        error[1] = "La carrera no existe"
        return error
    }

    error [0] = false
    return error


}
