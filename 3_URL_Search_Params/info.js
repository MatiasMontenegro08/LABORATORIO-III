const queryString = document.location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const animalBuscado = animales.find( animal => animal.id == id)

console.log(animalBuscado);

const contenedor_cards = document.querySelector(".container_info")

contenedor_cards.innerHTML = `<div class="column">
    <h2>${animalBuscado.name}</h2>
    <img src="${animalBuscado.image}" alt="Imagen del animal">
</div>
<div class="column">
    <h2>Información</h2>
    <p>${animalBuscado.information}</p>
</div>`