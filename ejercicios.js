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
items.forEach(item =>{
    console.log(item);
    console.log("Indice:" + items.indexOf(item));
});

//8
