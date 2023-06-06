//Ejercicio N°1
clasificaciones = ["Sol", "Ana", "Eduardo", "Martin", "Luca", "Ema"]
clasificaciones.shift()
clasificaciones[0] = "Eduardo"
clasificaciones[1] = "Ana"

clasificaciones.unshift("Lola")
clasificaciones.pop()
clasificaciones.join("_")
console.log("Ganador/a: " + clasificaciones[0])

//ejercicio N°2
const telefono = {marca: "Samsung", 
                 modelo: "Galaxy S20",
                 color: "Negro",
                 pantalla: "6 pulgadas",
                 sistemaOperativo: "Android",
                 almacenamiento: "128 GB",
                 ram: "8 GB",
                 precio: 699};

Object.entries(telefono)
Object.values(telefono)