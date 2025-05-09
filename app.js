let opcion = prompt("Elige una opción: \n1. Realizar la conversión de pesos Argentinos a dolares \n2. Salir");
if (opcion === "1") 
    pesos = prompt("¿Cual es el mmonto que queres convertir?");
    pesos = parseFloat(pesos);
    
    

let dolarTasa = 1300; 
let dolares = (pesos / dolarTasa);
alert("La conversión es de " + dolares.toFixed(2) + " dólares.");



//let pesoArgentino = prompt ("Ingrese una cantidad en pesos Argentinos");
//pesos = parseFloat(pesos);
//let dolar = 1300; 
//let dolares = (pesos / dolar);
//alert("La converdion es de " + dolares + " dólares.");