const prompt = require("prompt-sync")();

const { criar, atualizar, remover, ler } = require("./usuario.js");

while (true) {
  console.log(
    "O que deseja fazer?\n1 - Criar\n2 - Atualizar\n3 - Remover\n4 - Listar\n5 - Sair\n"
  );
  let opcao = Number(prompt());

  switch (opcao) {
    case 1:
      criar();
      break;
    case 2:
      atualizar();
      break;
    case 3:
      remover();
      break;
    case 4:
      ler();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}