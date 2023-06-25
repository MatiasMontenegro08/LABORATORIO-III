console.log(animales);

const contenedor_cards = document.getElementById("contenedor_cards");

let templateCard = ""

function crearCards() {
    animales.forEach((animal) => {
        templateCard += `<div class="card">
        <img src="${animal.image}" alt="${animal.type} ${animal.id}">
        <p>${animal.name}</p>
        <a href="./info.html?id=${animal.id}" class="btn btn-danger">Mas info</a>
        </div>`
    })

    contenedor_cards.innerHTML = templateCard
}

crearCards()