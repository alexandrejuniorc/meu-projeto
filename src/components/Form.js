import React from 'react';
import { useState } from 'react';

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault(); // Previne o padrão e execute o que eu quero
    console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
    console.log('Cadastrou o usuario');
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)} // setName atribui o valor e foi utilizado o name pra resgatar o valor
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
