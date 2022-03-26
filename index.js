const fs = require("fs/promises");

// const conteudo = fs
//   .readFile("./arquivo.txt")
//   .then((conteudo) => console.log(conteudo))
//   .catch((erro) => console.log("Deu ruim"));

// console.log("Teste depois da leitura");

const soma = (a, b) => {
  return new Promise(async (resolve, reject) => {
    if (typeof (a + b) != "numero") {
      return resolve(console.log("Deu certo"))
    }
    const somaTotal = a + b;
    try {
      await fs.appendFile("resultado.txt", `${a} + ${b} = ${somaTotal}\n`);
      console.log("Arquivo criado com sucesso");
      console.log(`Soma= ${somaTotal}`);
    } catch {
      console.log("Erro na criação do arquivo");
    }
  });
}

soma(1, 2)