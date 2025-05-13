function juegoNumeroSecreto() {
  const numeroSecreto = 27;
  let numeroUsuario;

  while (true) {
    const input = prompt("Adivina el número secreto (entre 1 y 100):");
    numeroUsuario = parseInt(input);

    if (isNaN(numeroUsuario)) {
      alert("Error: Debes ingresar un número válido.");
      continue;
    }

    if (numeroUsuario === numeroSecreto) {
      const mensajeFinal = `
        <p> Felicidades, adivinaste el número secreto: ${numeroSecreto}</p>
       
      `;
      document.getElementById("resultado").innerHTML = mensajeFinal;
      break;
    } else {
      alert("el número secreto es incorrecto, vuelve a intentarlo.");
    }
  }
}

window.onload = juegoNumeroSecreto;