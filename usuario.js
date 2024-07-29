const prompt = require("prompt-sync")();
const usuarios = [];

let ultimoId = 1;

const emailValido = (email) => {
  let valido = true;

  usuarios.forEach((usuario) => {
    if (email == usuario.email) {
      console.log("Email duplicado");
      valido = false;
    }
  });

  return valido && email != "";
};

const modelo = (id) => {
  console.log(id);

  const nome = prompt("Digite o nome do usuário: ");
  const email = prompt("Digite o email do usuário: ");
  const telefones = [];

  while (true) {
    const telefone = prompt(
      "Digite um número do usuário, ou digite 'sair' para encerrar: "
    );

    if (telefone == "sair") {
      break;
    }

    telefones.push(telefone);
  }

  if (nome != "" && telefones.length > 0 && emailValido(email)) {
    let usuario;
    if (id != undefined) {
      usuario = {
        nome,
        email,
        telefones,
        id,
      };
    } else {
      usuario = {
        nome,
        email,
        telefones,
        id: ultimoId,
      };

      ultimoId++;
    }

    return usuario;
  }

  console.log("Os dados inseridos são inválidos");
};

const criar = () => {
  const usuario = modelo();

  if (usuario != undefined) {
    usuarios.push(usuario);
  }
};

const ler = () => {
  usuarios.forEach((usuario) => {
    console.log(`
            ID: ${usuario.id}
            Nome: ${usuario.nome}
            Email: ${usuario.email}
            `);

    console.log("Telefones: ");
    usuario.telefones.forEach((telefone, indice) => {
      console.log(`
                    Telefone ${indice + 1}: ${telefone}
                    `);
    });
  });
};

const atualizar = () => {
  ler();

  const id = prompt("Digite o id que deseja atualizar: ");

  const novo = modelo(id);

  usuarios.forEach((usuario, indice) => {
    if(id == usuario.id) {
        usuarios[indice] = novo
    }
  })

};

const remover = () => {
    ler();

    const id = prompt("Digite o id que deseja remover: ");

    usuarios.forEach((usuario, indice) => {
        if(id == usuario.id) {
            const confirma = prompt("Deseja realmente remover? s para sim.")
            if(confirma == "s") {
                usuarios.splice(indice, 1)
                console.log("Usuario removido")
            }
        }
      })

}

module.exports = {
    criar,
    ler,
    atualizar,
    remover
}
