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

