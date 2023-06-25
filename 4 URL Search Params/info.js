// http://www.ejemplo.com/pagina?parametro1=valor1&parametro2=valor2&parametro3=valor3

const queryString = document.location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const animalBuscado = animales.find( animal => animal.id == id)

const contenedor = document.querySelector(".container_info")

contenedor.innerHTML = `<div class="column">
<h2>${animalBuscado.name}</h2>
<img src="${animalBuscado.image}" alt="Imagen del animal">
</div>
<div class="column">
<h2>Información</h2>
<p>${animalBuscado.information}</p>
</div>`