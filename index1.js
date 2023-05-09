/* const fs = require("fs");
 */
/* adiciona o arquivo na pasta: caminho -> conteúdo -> função com tratamento de erro */
fs.writeFile(
  "./files/arquivo.txt",
  "Esse é o primeiro arquivo",
  function (err) {
    if (err) {
      return console.log(`algo deu errado: ${err}`);
    }
  }
);

/* lê o arquivo: caminho -> tipo de codificação (pt-BR é utf8) -> função com tratamento de erro e data */
fs.readFile("./files/arquivo.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(`algo deu errado: ${err}`);
  } else {
    console.log(data);
  }
});

/* renomeia o arquivo: caminho do arquivo -> nome do novo arquivo -> função com tratamento de erro  */
fs.rename("./files/arquivo.txt", "./files/novo-nome.txt", function (err) {
  if (err) {
    return console.log(`algo deu errado: ${err}`);
  } else {
    console.log("arquivo renomeado");
  }
});

/* deletar arquivo: caminho do arquivo -> função com tratamento de erro */
fs.unlink("./files/novo-nome.txt", function (err) {
  if (err) {
    return console.log(`algo deu errado: ${err}`);
  } else {
    console.log("arquivo deletado");
  }
});
