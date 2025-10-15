//ejercicio1
let primer = 1;
let y ="true";

let segundo = primer + Boolean(y);

console.log(segundo)
console.log("hola")
//ejercicio 2
let lado_cuadrado = 5;

let area_cuadrado = lado_cuadrado * lado_cuadrado;
let area_cuadrado2 = lado_cuadrado **2
console.log(area_cuadrado);
console.log(area_cuadrado2);
//ejercicio 3
primer = 25;
x = 22;

if (primer === x){
    console.log("son iguales");
} else {
    console.log("no son iguales");
}
// ejerecicio 4
let edad = 18;
let tienePermisos = "true";

if (edad >= 18 && tienePermisos === "true"){
    console.log("hay accesso");
} 
else {
    if (edad < 18 ) {
        console.log("muy joven");
    }
    if (tienePermisos === "false") {
        console.log("sin permisos");
    }
}

//ejercicio 5
let nota = 6.5;

let resultado = nota >= 6.5 ? "aprobado" : "supendido";
console.log(resultado);

if (nota >= 6.5) {
    if (nota === 10){
        console.log("MH");
    }
    else if (nota >= 9){
        console.log("sobresaliente");
    }
    else if (nota >= 7){
        console.log("notable");
    }
    else{
        console.log("aprobado");
    }
}
else {
    console.log("suspenso");
}

//ejercicio 6



//ejercicio 7

for (let i = 0; i <= 15; i++) {
    console.log(i)
}

//ejercicio 8

let i = 0
while (i < 31){
    if (i % 2 === 0){
        console.log(i, "es par");
    } else {
        console.log(i, "es impar");
    }
    i++ 
}