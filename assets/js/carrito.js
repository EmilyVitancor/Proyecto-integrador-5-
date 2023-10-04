let botonVac = document.getElementById("buttonVaciar");
let botonFin = document.getElementById("buttonFinalizar");

if (localStorage.getItem("ProductElegidos") == null) {

    document.getElementById("button").removeChild(botonVac);
    document.getElementById("button").removeChild(botonFin);
}

let cont = 0;
let productoUser = [];

function Compras() {
    productoUser = JSON.parse(localStorage.getItem("ProductElegidos"));

    let compra = "";
    const contenedor = document.getElementById("Contproduct");
    productoUser.forEach((producto, index) => {
        compra += `<div class="card" id="producto${index}"  style="width: 18rem;">`;
        compra += ` <img src="https://us.123rf.com/450wm/vectoraa/vectoraa1609/vectoraa160901043/62453081-icono-de-carrito-de-compras-icono-de-vector-de-mejor-dise%C3%B1o-plano.jpg" class="card-img-top" alt="...">`;
        compra += ` <div class="card-body">`;
        compra += `<h5 class="card-title">${producto.nombre}</h5>`;
        compra += `<p class="card-text">$${producto.precio}</p>`;
        compra += ` </div>`;
        compra += ` </div>`;
        cont = index;
    });

    contenedor.innerHTML = compra;

};

document.onload = Compras();




function borrarCarrito() {

    for (let i = 0; i < cont + 1; i++) {
        let producto = document.getElementById("producto" + i);
        document.getElementById("Contproduct").removeChild(producto);
    }

    localStorage.removeItem("ProductElegidos");


    document.getElementById("button").removeChild(botonFin);
    document.getElementById("button").removeChild(botonVac);


}


botonFin.onclick = (e) => {
    e.preventDefault()
    Swal.fire({
        title: 'Vuelva pronto',
    })
    borrarCarrito();
}

botonVac.onclick = (e) => {
    e.preventDefault();
    borrarCarrito();
}