//algoritmo -> programar un login

//programar una funcion que nos permita comparar las variables de usuario y contraseña para permitirle al usuario 
//ingresar a la web



// let usuario = prompt("Ingresa tu mail").toLowerCase()
// let contra = prompt("Ingresa tu contra")


// ingresoLogin(usuario, contra)

//eventos JS 

// let form = document.getElementById("form")
// console.log(form)

// form.addEventListener("submit",recibirLogin)

// //metodo, propiedad

// // function recibirLogin(e){
// //     e.preventDefault();

// //     //capturar los datos que ingresan por el input
// //     let datos = e.target
// //     console.log(datos.children[0].value)
// //     console.log(datos.children[1].value)
// // }






// let usuario = document.getElementById("usuario").value;
// let contra = document.getElementById("contrania").value;

// ingresoLogin(usuario,contra)


//traer el boton de HTML al document (DOM)

// let boton = document.getElementsByClassName("btn")
// console.log(boton)

// //asignarle un evento al nodo del DOM

// function hacerAlgo(){
//     alert("Hola Soy un boton con evento addEvent")
// }

// boton[0].addEventListener("click", hacerAlgo)
// boton[1].addEventListener("click", hacerAlgo)
// boton[2].addEventListener("click", hacerAlgo)


// boton[0].onclick = () => alert("Hola Soy un boton con evento de prefijo")
// boton[1].onclick = () => alert("Hola Soy un boton con evento de prefijo")
// boton[2].onclick = () => alert("Hola Soy un boton con evento de prefijo")


console.log("Sistema de Login enlazado correctamente.");
console.log("---------------------------------------");


function ingresarData(){
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;

    let ingresado = buscarUsuario(usuario);
    
    //Este codigo vendría a ser el flujo de nuestra App
    // y las 3 posibilidades que pueden ocurrir.

    if(ingresado==null){
        console.error("Usuario ingresado incorrectamente.")
    }else if(validarContrasenia(ingresado,contrasenia)== true){
        console.log("¡Ingresó correctamente!");  
        mostrarPerfil(ingresado);
    }else{
        console.error("La contraseña ingresada es incorrecta.")
    }


    console.log("usuario: " + usuario + " " + "contraseña: " + contrasenia);
}

//La funcion buscarUsuario recibe un email, ingresado en el formulario,
// y se encarga de recorrer nuestro listado de usuarios buscando si alguno
// coincide con el ingresado.
// ******* Completar el for que recorre el listado *******
function buscarUsuario(user) {
    let buscado = null;
 
    for(let i=0;i<personas.length;i++){
        if(personas[i].email == user){
            buscado=user;
        }
    }

   return buscado;
}

//La funcion validarContrasenia recibe un objeto por parametro
// y la contraseña ingresada por el usuario. Entonces se encarga
// de chequear que la ingresada sea igual a la guardada de ese usuario.
// Devolviendo true si coincide o false en el caso contrario.
// ******* Completar el código faltante *******
function validarContrasenia(user, pass) {
    let valido = false;
    for(let i=0;i<personas.length;i++){
        if(personas[i].email == user){
            if(personas[i].password == pass){
                valido= true;
            };
        };
    };

    return valido;
};
//La funcion mostrarPerfil recibe un objeto como parametro
// y se encarga de "dibujar" el codigo HTML en el index manipulando
// el DOM para ver la tarjeta del usuario ingresado.



