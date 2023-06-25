console.log(animales);

const contenedor_cards = document.getElementById("contenedor_cards");

// Obtener todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let templateCard = ""

// templateCard = `<div class="card">
// <img src="${animales[0].image}" alt="${animales[0].type} ${animales[0].id}">
// <p>${animales[0].name}</p>
// <button class="btn btn-danger">Mas info</button>
// </div>`;

animales.forEach( (animal) => {
    templateCard += `<div class="card">
    <img src="${animal.image}" alt="${animal.type} ${animal.id}">
    <p>${animal.name}</p>
    <button class="btn btn-danger">Mas info</button>
    </div>`;
})

//Alternativa con for of
// for (const animal of animales) {
//     templateCard += `<div class="card">
//         <img src="${animal.image}" alt="${animal.type} ${animal.id}">
//         <p>${animal.name}</p>
//         <button class="btn btn-danger">Mas info</button>
//     </div>`;
// }

//Alternativa con for in
// for (const index in animales) {
//     const animal = animales[index];
//     templateCard += `<div class="card">
//         <img src="${animal.image}" alt="${animal.type} ${animal.id}">
//         <p>${animal.name}</p>
//         <button class="btn btn-danger">Mas info</button>
//     </div>`;
// }

//Alternativa con el for tradiconal
// for (let i = 0; i < animales.length; i++) {
//     const animal = animales[i];
//     templateCard += `<div class="card">
//         <img src="${animal.image}" alt="${animal.type} ${animal.id}">
//         <p>${animal.name}</p>
//         <button class="btn btn-danger">Mas info</button>
//     </div>`;
//}

contenedor_cards.innerHTML = templateCard;