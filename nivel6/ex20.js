let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];
const novosProdutos = produtos.slice(0, 6);

console.log("Tem café", produtos.includes("Café"));
console.log("Posição de café:", produtos.indexOf("Café"));
console.log("Novo array:", novosProdutos);
produtos.splice(3, 1);
console.log("Após remover Leite:", produtos)
const texto = produtos.join( " ");
console.log("Produtos em texto:", texto);