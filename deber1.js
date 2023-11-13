//candidato debe terner 25 años  o mas  y poseer licencia profesional//

let edad =Number(prompt("ingrese su edad"));
let licencia=Boolean(prompt("¿dispone licencia profesional?"));
if(edad>=25 && licencia==true ){
    alert("APTO");
}
else{
    alert("NO APTO");
}

