// Inicio boxMsj
function boxMensaje(mensaje) {
    alert(mensaje);
  }
  
  // Fin boxMsj
  
  // Inicio Validar número de 1 a 100
  function validarEntrada(entrada) {
    return Number.isInteger(entrada) && entrada >= 1 && entrada <= 100;
  }
  // Fin Validar número de 1 a 100
  
  // Función para saludar al usuario
  function saludar() {
    boxMensaje("Quiero jugar un juego. Tienes 6 intentos para adivinar el número secreto entre 1 y 100. Si fallas, habrá consecuencias. Comencemos...");
  }
  
  // Inicio Número Aleatorio
  function numeroRandom() {
    return Math.floor(Math.random() * 100) + 1;
  }
  // Fin Número Aleatorio
  
  // Inicio Juego
  function jugarAdivinaElNumero() {
    const numeroAleatorio = numeroRandom();
    let adivinado = false;
  
    for (let intentos = 1; intentos <= 6; intentos++) {
      let guess;
  
      do {
        let userInput = prompt(`Intento ${intentos}: Adivina el número (entre 1 y 100). Te quedan ${7 - intentos} intentos:`);
        guess = parseInt(userInput);
  
        if (userInput === null) {
          boxMensaje("Has decidido cancelar el juego. Habrá consecuencias.");
          boxMensaje("No sé cuáles, solo sé hacer estos cartelitos. Por ahora...");
          boxMensaje("Que tengas un hermoso día");
          return;
        } else if (userInput.trim() === "") {
          boxMensaje("Por favor, ingresa un número.");
        } else if (!validarEntrada(guess)) {
          boxMensaje("Por favor, ingresa un número entero válido entre 1 y 100.");
        }
      } while (!validarEntrada(guess));
  
      if (guess === numeroAleatorio) {
        adivinado = true;
        boxMensaje(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        break;
      } else if (intentos < 5) {
        if (guess < numeroAleatorio) {
          boxMensaje("El número es mayor. Intenta de nuevo.");
        } else if (guess > numeroAleatorio) {
          boxMensaje("El número es menor. Intenta de nuevo.");
        }
      } else if (intentos === 5) {
        if (guess < numeroAleatorio) {
            boxMensaje("El número es mayor. Intenta de nuevo.");
          } else if (guess > numeroAleatorio) {
            boxMensaje("El número es menor. Intenta de nuevo.");
          }
        boxMensaje("¡Cuidado! El siguiente es tu último intento.");
      } else if (intentos === 6) {
        boxMensaje(`Se acabaron los intentos. El número era ${numeroAleatorio}. Ahora las consecuencias`);
        boxMensaje("No sé cuáles, solo sé hacer estos cartelitos. Por ahora...");
        boxMensaje("Que tengas un hermoso día");
      }
    }
    }
  // Fin Juego
  
  // Saludo al usuario
  saludar();
  
  // Comenzar el juego
  jugarAdivinaElNumero();