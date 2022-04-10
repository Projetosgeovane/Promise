const fs = require("fs/promises");

// const conteudo = fs
//   .readFile("./arquivo.txt")
//   .then((conteudo) => console.log(conteudo))
//   .catch((erro) => console.log("Deu ruim"));

// console.log("Teste depois da leitura");

const soma = (a, b) => {
  return new Promise(async (resolve, reject) => {
    if (typeof (a + b) != "numero") {
      return reject(console.log("Deu certo"))
    }
   resolve(await fs.appendFile("resultado.txt", `${a} + ${b}\n`), console.log(a + b));
  });
}

soma(1, 2)