let usuario = "admin";
let contra = "admin";
let intentos = 4;

function ingresar() {
   
  while (intentos > 0) {
    let user = prompt("Ingresar su nombre de Usuario");
    let pass = prompt ("Ingresar su contraseña");

    if (user == usuario && pass == contra) {
        alert("Bienvenido, admin");
        break;
    } else intentos--;
    alert("Usuario/Contraseña invalido(s). Tiene " +intentos + " intentos restantes");
 //   alert("Usuario invalido. Tiene intentos restantes")
 //   usuario = prompt("Por favor ingrese un nombre de usuario")
  }
  if (intentos <= 0) {
    alert("No hay intentos restantes. El usuario ha sido bloqueado");
  }
}

ingresar()