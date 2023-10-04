class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}

function Validacion() {
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value

    if (isNaN(precio)) {

        alert("No ingreso un numero");
        return false;

    }
    if (nombre == "", precio == "") {

        alert("No ingreso un dato")
        return false;
    }

    return true;
}
let cont = 0;

function Compras() {
    let compras;

    if (localStorage.getItem("productos") == null) {

        compras = [
            { nombre: "Lapices", precio: 1000 },
            { nombre: "Cartuchera", precio: 1500 },
            { nombre: "Mochila", precio: 3000 },

        ];
        localStorage.setItem("productos", JSON.stringify(compras));

    } else {

        compras = JSON.parse(localStorage.getItem("productos"));

    }

    let compra = "";
    const contenedor = document.getElementById("contenedor");
    compras.forEach((producto, index) => {
        compra += `<div class="card" id="producto${index}"  style="width: 18rem;">`;
        compra += ` <img src="/assets/img/Sleppy Ball (1).png" class="card-img-top" alt="...">`;
        compra += ` <div class="card-body">`;
        compra += `<h5 class="card-title">${producto.nombre}</h5>`;
        compra += `<p class="card-text">$${producto.precio}</p>`;
        compra += `<input type="submit" class="Btn" id= "buttomAñadir${index}" value="Comprar">`;
        compra += ` </div>`;
        compra += ` </div>`;
        cont = index;
    });

    contenedor.innerHTML = compra;

    let productoUser;
    if (localStorage.getItem("ProductElegidos") == null) {

        productoUser = [];


    } else {

        productoUser = JSON.parse(localStorage.getItem("ProductElegidos"));

    }
    for (let i = 0; i < cont + 1; i++) {

        let buttonAñadidos = document.getElementById("buttomAñadir" + i);
        buttonAñadidos.onclick = (e) => {
            e.preventDefault()
            compras = JSON.parse(localStorage.getItem("productos"));
            let newProduct = new Producto(compras[i].nombre, compras[i].precio);

            productoUser.push(newProduct);
            localStorage.setItem("ProductElegidos", JSON.stringify(productoUser));
        }
    }
}



document.onload = Compras()

function CrearProducto() {
    if (Validacion() == true) {

        let nombre = document.getElementById("nombre").value;
        let precio = document.getElementById("precio").value;

        let compras;

        if (localStorage.getItem("productos") == null) {

            compras = [
                { nombre: "Lapices", precio: 1000 },
                { nombre: "Cartuchera", precio: 1500 },
                { nombre: "Mochila", precio: 3000 },

            ];
            localStorage.setItem("productos", JSON.stringify(compras));

        } else {

            compras = JSON.parse(localStorage.getItem("productos"));

        }

        let nuevoProduct = new Producto(nombre, precio)
        compras.push(nuevoProduct)

        localStorage.setItem("productos", JSON.stringify(compras));
        Compras()
        document.getElementById("nombre").value = ""
        document.getElementById("precio").value = ""

    }

}

let boton = document.getElementById("boton")

boton.onclick = (e) => {

    e.preventDefault()
    Validacion()
    CrearProducto()
}



let form = document.getElementById("form");

function ADMIN() {
    let Admin = localStorage.getItem("Sesiones");

    if (Admin == "Administrador Activo") {

        form.style.display = "block";
    }
    else{
        form.style.display = "none";


    }

}

ADMIN()
