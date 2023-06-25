let contenedor = document.getElementById("contenedor")

let parrafo = document.createElement('p');
let parrafo2 = document.createElement('p');
parrafo.innerHTML = "Parrafo creado <b>dinamicamente</b>";
parrafo.classList.add('azul')

parrafo2.innerHTML = "soy otro parrafo"
parrafo2.style.color = "red"
parrafo2.style.fontFamily = "Verdana"

contenedor.append(parrafo, parrafo2);

const nombre = "Juan Perez";
const edad = 20;

const template = `
  <div>
    <h2>${nombre}</h2>
    <p>Edad: ${edad}</p>
  </div>
`;

const div = document.createElement('div');
div.innerHTML = template;

contenedor.appendChild(div);
