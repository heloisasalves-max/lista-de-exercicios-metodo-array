let numeros = [50, 10, 100, 5, 25, 1];

numeros.sort((a, b) => a - b);

console.log("Números ordenados corretamente:", numeros);

// Se usarmos apenas numeros.sort os numeros usam as ordem de string.
// Para ordenar os números corretamente devemos fazer dessa maneira
