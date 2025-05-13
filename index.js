function factorialnumber() {
    let number;

 // Validación 
   
 while (true) { // Bucle infinito hasta que el usuario ingrese un número válido
    const input = prompt("Ingrese un numero:");

        // Convertir a número y validar
      number = parseFloat(input);

        if (!isNaN(number)) {
            break; // Salir del bucle si es válido
        } else {
            alert("Error: Debe ingresar un número válido");
        }
    }

// Fórmula
function calcularFactorial(num) {
        let resultado = 1;
        let pasos = "";

        for (let i = 1; i <= num; i++) {
            resultado *= i;
            pasos += (i === 1) ? `${i}` : ` x ${i}`;
        }

        return { resultado, pasos };
    }

    const { resultado, pasos } = calcularFactorial(number);
    
// Mostrar resultados en el DOM
    document.getElementById('contenedor-factorial').innerHTML =`<h3>${number}! = ${pasos} = ${resultado}</h3>`;
}

window.onload = factorialnumber;