//1
let curso = 'JS Básico';
function mostrar(){
    let tema = 'Funciones';
    console.log(tema);
}
mostrar();
console.log(curso);
//2
function saludar(nombre){
    let saludo = 'hola ' + nombre;
    return saludo;
}
console.log(saludar('Sergio'));
//3
function imprimir(mensaje){
    console.log(mensaje);
}
const miLogger = imprimir('probando');
//4

let esPar = (n) => {
    let par = '';
    if (n % 2 === 0){
        par = 'true';
    } else {
        par = 'false'
    }
    return par
}

console.log('este número es' +esPar(3));
console.log('este número es' +esPar(10));

//5

let frutas = ['aguacate', 'uva', 'albaricoque'];
console.log('esto son frutas:', frutas[0], "y", frutas[frutas.length-1])
frutas.pop(frutas[frutas.length-1]);
frutas.push('mango');
console.log(frutas);

//6

let cola = [];
cola.push('Ana');
cola.push('Pepe');
cola.unshift('Luisa');
console.log(cola.shift());
console.log(cola);

//7
const items = ["altura", "base", "cuadrado", "bisectriz"];
let found = "false";
items.forEach(item =>{
    if (found === "true") return;
    console.log(item);
    console.log("Indice:" + items.indexOf(item));
    for (const b of item){
        if (b === "b"){
        console.log("En", item, "hay una b en la posición", item.indexOf(b));
        found = "true";
        break;
    }
    }
});

//8
let letras = ["a", "b", "c", "d"];
let primero = letras.slice(0, 2);
let ultimo = letras.slice((letras.length-3), (letras.length));
console.log(primero);
console.log(ultimo);
//9
let primnum = [1, 2];
let segnum = [3, 4];

let nums = primnum.concat(segnum);

console.log(nums);

//10
const números = [2, 5, 8, 12];
const morethanten = números.some(num => num > 10);
const morethanzero = números.every(num => num > 0);
const haseight = números.includes(8);

console.log(morethanten, morethanzero, haseight);

//11
const cod = [7, 8, 9];
let cod2 = cod.slice();
console.log(cod2.reverse());
console.log(cod.join("-"))

//12
const base = [1, 2, 3];
let cuadrados = [] 
base.forEach((item, index)=>{
    cuadrados[index] = item**2;
})
console.log(cuadrados)
//13
const pagos = [10, 20, 5];
let total = 0;
for (i = 0; i < pagos.length; i++){
    total = total + pagos[i];
}
console.log(total);
//14
let llamadadesorden = [10, 2, 1, 20];
llamadadesorden = llamadadesorden.sort((a, b) => a-b)
console.log(llamadadesorden);
llamadadesorden = llamadadesorden.sort((a, b) => b-a)
console.log(llamadadesorden);

//Clase 15 Octubre
//Clase 15 Octubre
//Clase 15 Octubre
//Clase 15 Octubre

//1 y 2
let array9 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let suma = 0;
for (let i=0; i < array9.length;i++){
    for (let j=0; j < array9[i].length; j++){
        console.log(array9[i][j]);
        suma += array9[i][j];
}}

console.log(array9[1][2])
console.log(suma)
//3
let arrayTri = [
    [
        ["Buenos"],
        ["Dias"],

    ],
    [
        ["Como"],
        ["Estas?"],
    ],
    [
        ["Yo"],
        ["Bien"],
    ]

]

for (let i=0; i < arrayTri.length;i++){
    for (let j=0; j < arrayTri[i].length; j++){
        for (let k=0; k < arrayTri[i][j].length; k++){
            console.log(arrayTri[i][j][k])
            for (let l=0; l < arrayTri[i][j][k].length; l++){
                console.log(arrayTri[i][j][k][l])

                
}}}}
//4
function cuentaAtrás(numerito){
    if (numerito < 1) return;
    console.log(numerito);
    cuentaAtrás(numerito - 1);
}
cuentaAtrás(10);
//5
function Sumar(n){
    if (n <= 1) return 1;
    return n + Sumar(n-1);
}
console.log(Sumar(16));
//6
function Factorial(n){
    if (n <= 1) return 1;
    return n * Factorial(n-1);
}
console.log(Factorial(5))
//7
const persona = {
    nombre: "Sergio",
    edad: 30,
    ciudad: "Málaga",
};

persona["profesión"] = "traductor";
persona.edad = 24;
persona["saludo"] = saludar(persona.nombre)
console.log(persona)
//8
const persona3 = {
    nombre: "Sergio",
    edad: 30,
    ciudad: "Málaga",
};
const persona1 = {
    nombre: "Pepe",
    edad: 30,
    ciudad: "Sevilla",
};

const persona2 = {
    nombre: "Juan",
    edad: 35,
    ciudad: "Córdoba",
};

const personas = [persona1, persona2, persona3];
console.log(personas)
for (let i=0; i < personas.length;i++){
    console.log(personas[i], "hola")
}
//9
const colores = ["rojo", "azul", "verde"];
const [color1, , color3] = colores;
console.log(color1, color3)

