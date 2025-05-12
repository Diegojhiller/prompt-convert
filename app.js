const dolarTasa = 1300; 
let historial=[];
let opcion ;

function convertirDivisa(pesos) {
    return pesos / dolarTasa;
}

while (opcion !== "2"){
    opcion = prompt("1-Divisa   2-Salir");

    switch (opcion) {
        case "1":
             let monto = prompt("Ingrese la cantidad en pesos argentinos (ARS):");

             if ( monto <= 0) {
                alert("Debe ingresar un número válido mayor a cero.");
            }else {
                let USD = convertirDivisa(monto);
                let result = USD.toFixed(2);
                
                alert(monto + " tus pesos equivalen a " + result + " USD");

                let operacion = {
                tipo: "divisa",
                entrada: monto + " ARS",
                salida: result + " USD",
                fecha: new Date()
                };

                historial.push(operacion);
            } 
        break;

        case "2":
            alert("Gracias por divizar con dolarDiego");
            console.log("Historial de usuario: ")
            console.log(historial)
        break;

        default:
            alert("opcion no reconocida, ingrese nuevamente el 1 o 2")

        break;
    }
}
