
let gratis = false;

const verificarInvitado = (hora) => {
    let edad = prompt("Ingrese su edad:");
    if (edad >= 18){
        alert("Podés pasar");
        if (hora > 2 && hora < 7 && gratis == false){
            alert("Además tenés la entrada gratis");
            gratis = true;
        } else {
            alert("Pagás la entrada");
        }
    } else {
        alert("No podes pasar porque sos menor")
    }
}

verificarInvitado(0);
verificarInvitado(1);
verificarInvitado(3);
verificarInvitado(5);



/* 
let frutas = {
    nombre: "manzana",
    color: "rojo",
};

document.write(frutas["color"]) */

//let numero = 0;
/* 
while (numero <= 20) {
    document.write(numero + "<br>");
    numero++;  
}; */
/* 
do {
    document.write(numero);
    numero++;
} while (numero<= 10); */

/* for (let i = 0; i <= 5; i++){
    if (i == 3){
        continue;
    }
    document.write(i + "<br>");
} */
/* 
let animales = ["gato", "perro", "lechuza"];

for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>")

for (animal of animales){
    document.write(animal + "<br>");
} */

/* let array1 = ["maria", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "jose"];

forNidea:
for (let array in array2){
    if (array == 2){
        for (let array of array1){

            if (array == "josefa"){
                break forNidea;
            }
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
} */
/* 
function saludar(nombre){
    document.write(`Hola ${nombre}, ¿Cómo estás?`);
} */

/* const saludar = function(nombre) {
    document.write(`Hola ${nombre}, ¿Cómo estás?`);
} */

/* const saludar = nombre => document.write(`Hola ${nombre}, ¿Cómo estás?`);

saludar("Mary"); */