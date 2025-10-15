function saludar(nombre){
    let saludo = 'hola ' + nombre;
    return saludo;
}

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
    console.log(personas[i].nombre, "nombre")
}
//9 y 10
const colores = ["rojo", "azul", "verde"];
const [color1, color2, color3] = colores;
console.log(color1, color2, color3);

const numeros = [1, 2 ,3];
const [num1, , num3] = numeros;
console.log(num1, num3);

//11 y 12
const nombrePersona = {info1} = persona.nombre;
console.log(nombrePersona);
const edadPersona= {info2} = persona.edad;
console.log(edadPersona);
const ciudadPersona= {info3} = persona.ciudad;
console.log(ciudadPersona);