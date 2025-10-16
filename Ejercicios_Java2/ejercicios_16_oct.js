let grupoAlumnons = [
    Alumno1 = {
        nombre: "Sergio",
        edad: 24,
    },

    Alumno2 ={
        nombre: "Alejandro",
        edad: 30,
    },

    Alumno3 = {
        nombre: "Victor",
        edad: 23,
    },

    Alumno4 = {
        nombre: "Isaac",
        edad: 35,
    },

    Alumno5 = {
        nombre: "Moises",
        edad: 31,
    },
]


let Par = 0;
let Impar = 0;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i in numeros){
    if (i % 2 === 0){
        Par++ 
    } else {
        Impar++
    }

}
console.log(Par, Impar)

const persona = {
    nombre: "a",
    edad: 10,
    ciudad: "malaga",
    profesion: "no",
}

console.log(persona)
persona.nombre = "b"

persona.camino = function caminar(){
    console.log("estoy dando un paseo")
}

persona.saludar = function saludar(){
    console.log("te saludo")
} 
Object.freeze(persona);

function mostrarArray(array){
    array.forEach(element => {
        console.log(element)
    });
}
let frutas = ["manzana", "pera", "platano"]
console.log(mostrarArray(frutas))

//5
const inventario = [
    mesa = {
        nombre: "mesas",
        precio: 80,
        stock: 15},

    silla = {
        nombre: "sillas",
        precio: 100,
        stock: 10},

    armario = {
        nombre: "armarios",
        precio: 90,
        stock: 6}
]

let valor = 0;

inventario.forEach((element)=> {
    element.valor = element.precio * element.stock;
});

//6
inventario[2].stock += 10;

inventario.push(ventilador = {
    nombre: "ventiladores",
    precio: 20,
    stock: 105,
}) 

console.log(inventario);

inventario.shift()

console.log(inventario);
//7
function buscarProductoNombre(inv){
    inv.forEach((element)=> {
        console.log(element.nombre)
    });
}
buscarProductoNombre(inventario);

//8
let inv = inventario.map(elemento => `producto: ${elemento.nombre} - precio: ${elemento.precio} - stock: ${elemento.stock}.`).join("\n");
console.log(inv);

//9
const alumnos = [
    Ana = {
        nombre: "Ana",
        edad: 8,
        nota: [7, 8, 6] },
    Maria = {
        nombre: "Maria",
        edad: 9,
        nota: [5, 4, 4]},
    Juanito = {
        nombre: "Juanito",
        edad: 7,
        nota: [9, 8, 9]},
]

function notaMedia(alumno){
    let total = 0;
    for (let i = 0; i < alumno.length; i++){
        total += alumno[i];
    }
    return total/alumno.length;
    
}

for (let i = 0; i < alumnos.length; i++) {
    let media = notaMedia(alumnos[i].nota);
    alumnos[i].notaFinal = media;
}

console.log(alumnos)

//10
const [nombre1, nombre2, nombre3] = alumnos;

console.log(nombre1.nombre, "y", nombre2.nombre, "y", nombre3.nombre)
console.log(nombre1.notaFinal, "y", nombre2.notaFinal, "y", nombre3.notaFinal)
notas = []

alumnos.sort((a, b) => {
    const mediaA = notaMedia(a.nota);
    const mediaB = notaMedia(b.nota);
    return mediaB - mediaA;
});

console.log(alumnos)

//11
function Sumador(array){
    let Sumador = [0]
    for (i = 1; i < array.length; i++){
        Sumador.push(0)
    }
    for (a = 0; a < array.length; a++){
        for (n = 0; n < array[a].length; n++){
            Sumador[a] += array[a][n]; 
        }
    }
    console.log(Sumador)
}

let Prueba = [[3,5,6],[10,11,12],[33,34,35]]
Sumador(Prueba)
console.log("Separación")

//11 - Recursivo
function Sumador2(array, a = 0, Sumador = []) {
    if (a === array.length){
        console.log(Sumador);
        console.log("No hay más Arrays")
        return;
    }

    if (Sumador.length <= a){
        Sumador.push(0);
        console.log("Prueba")
    }
    for (let n = 0; n < array[a].length; n++){
        Sumador[a] += array[a][n];
        console.log(array[a][n])
        console.log(Sumador)
    
    }
    Sumador2(array, a+1, Sumador)
    
}


Sumador2(Prueba)

//12