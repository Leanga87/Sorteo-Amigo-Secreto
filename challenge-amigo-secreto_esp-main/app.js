let amigos= [];
let yaSorteado = false; // Variable para verificar si el sorteo ya ocurrio
const limiteNombres = 10;// Limite de nombres Permitidos

//Funcion para agregar a un amigo
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); //elimina espacios en blanco al principio y al final


    //Validacion para no permitir nombres repetidos o espacios en blancos en la caja de nombres
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
        inputNombre.value = ""; // limpiar la caja de nombres
        return;
    }

    if (amigos.length >= limiteNombres) {
        alert( "Lo siento, no se permiten agregar mas nombres, el limite es 10.")
        return;
    }

    for ( let i = 0; i < amigos.length; i++) {
        if (amigos[i]=== nombre) {
            alert("Por favor ingrese un nombre valido, este ya se encuentra en la lista ");
            inputNombre.value = ""; //limpiar caja de nombres
            return;
        }


}
amigos.push(nombre); // Agregar el nombre al Array

//Limpiar caja de nombres y dar foco al input para el siguiente nombre
inputNombre.value = "";
inputNombre.focus();

//Mostrar la lista actualizad de amigos
mostrarLista();


}
    
    //Funcion para mostrar lista de amigos 
    function mostrarLista() {
        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = ""; //Limpiar la lista antes de actualizar
        let contenido= "";
        for (let i = 0; i < amigos.length; i++) {
            contenido += "<li>" + amigos [i] + "</li>";

        }
        listaAmigos.innerHTML = contenido;
       
    }


 //Funcion para sortear amigo
function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    // Si ya se sorteo una vez, reiniciar el juego antes de continuar
    if(yaSorteado) {
        reiniciarJuego();
        return;

    }   
    

    
    


if (amigos.length <4){
    alert("por favor ingrese al menos 4 nombres para sortear");
    return;
}


// Seleccionar amigo aleatorio
const aleatorio = Math.floor(Math.random()* amigos.length);
const amigoSorteado = amigos[aleatorio];

// Mostrar el nombre sorteado
ulResultado.innerHTML = `<li>El amigo secreto es : ${amigoSorteado}</li>`;

//Ya se hizo un sorteo
yaSorteado = true;

}

function reiniciarJuego(){
    amigos = [];
    mostrarLista(); // limpiar lista

    //limpiar el nombre sorteado
    document.getElementById("resultado").innerHTML = "";


    //Reiniciar juego

    yaSorteado = false;
}


