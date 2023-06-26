console.log(productos);

const contenedor_cards = document.getElementById("contenedor_cards");

// Obtener todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let templateCard = ""

productos.forEach( (productos) => {
    templateCard += `<div class="card">
    <img src="${productos.image}" alt="${productos.type} ${productos.id}">
    <p>${productos.name}</p>
    <button class="btn btn-danger">Mas info</button>
    </div>`;
})

contenedor_cards.innerHTML = templateCard;