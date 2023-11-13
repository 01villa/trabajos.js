//use strick//
//el estudiante debe mantener promedio igual o superior a 8.5 y los ingresos no superen los 600 dolares//

let promedio= Number(prompt("¿cual es su promedio?"));
let ingresofamiliar= Number(prompt("¿su ingreso familiar mensual es?"));
if (promedio >= 8.5 && ingresofamiliar <=600){
    alert("APROBADO");
}
else{
    alert("DESAPROBADO");
}