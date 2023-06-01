setTimeout(() => {
    let contenedor = document.getElementById("contenedor") //primero creamos un div

    let tituto = document.createElement('h1'); //creamos una etiqueta h1
    tituto.innerHTML = "Modificando el DOM"; //ingresamos un texto a la etiqueta
    tituto.style.color = "green";

    let parrafo = document.createElement('p'); //creamos un parrafo.
    parrafo.innerHTML = 'lorem';
    parrafo.classList.add('fuente')  //creamos una clase en el archivo css y se la asignamos al parrafo

    contenedor.append(tituto, parrafo); //agregamos las etiquetas creadas al div "No olvidar este paso!!!"

}, 3000);


