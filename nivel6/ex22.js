let musicas = ["Parabéns a Você", "Atirei o Pau no Gato", "Brilha, Brilha, Estrelinha", "Asa Branca", "A Canoa Virou", "Cai, Cai, Balão", "O Cravo e a Rosa", "Ciranda, Cirandinha"];

console.log("Tem Parabéns a Você?", musicas.includes("Parabéns a Você"));

console.log("Posição da Parabéns a Voce:", musicas.indexOf("Parabéns a Você"));

const musicasSelecionados = musicas.slice(1, 3);
console.log("Músicas selecionados (1 a 3):", musicasSelecionados);

musicas.splice(1, 1);
console.log("Após remover Atirei o Pau no Gato: ", musicas);

musicas.sort();
console.log("Músicas ordenadas:", musicas);

musicas.reverse();
console.log("Músicas invertidas:", musicas);

console.log("Com hífen:", musicas.join( " - "));