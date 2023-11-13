let numero;

do {
    numero = prompt("Ingrese un número positivo:");
} while (isNaN(numero) || numero <= 0);

console.log("Número ingresado correctamente: " + numero);


let numero;

while (true) {
    numero = prompt("Ingrese un número positivo:");

    if (!isNaN(numero) && numero > 0) {
        break; // Salir del bucle si se ingresa un número positivo
   }
}

console.log("Número ingresado correctamente: " + numero);


let numero;

for (;;) {
    numero = prompt("Ingrese un número positivo:");

    if (!isNaN(numero) && numero > 0) {
        break; // Salir del bucle si se ingresa un número positivo
    }
}

console.log("Número ingresado correctamente: " + numero);
