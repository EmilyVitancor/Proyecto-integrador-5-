
let Activo="Administrador Activo";
let Inactivo="Administrador Desactivado";

function Formulario() {

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario == "" || contrasena == "") {
        alert("Error!!! FALTAN DATOS A INGRESAR")

    }
    if (usuario == "Administrador" && contrasena == "4321") {
        alert("BIENVENIDO ADMINISTRADOR")

        localStorage.setItem("Sesiones", Activo);
    }else{

        localStorage.setItem("Sesiones",Inactivo);


    }

    document.getElementById("usuario").value="";
    document.getElementById("contrasena").value="";
}

const form = document.getElementById("formulario");
const botonCerrar = document.getElementById("Cerrar");



function BorrarForm(){

    let EsAdmin = localStorage.getItem("Sesiones")
    if(EsAdmin == "Administrador Activo"){
        form.style.display="none";
        botonCerrar.style.display="block";

    }
}
BorrarForm();


let boton = document.getElementById("boton");
boton.onclick = (e) => {
    e.preventDefault()
    Formulario();
    BorrarForm();
}



botonCerrar.onclick=(e)=>{
    e.preventDefault()
    form.style.display="block";
    botonCerrar.style.display="none";
    localStorage.setItem("Sesiones", Inactivo);
}

