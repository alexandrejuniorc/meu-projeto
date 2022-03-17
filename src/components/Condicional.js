import React from 'react';
import { useState } from 'react';

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  function limparEmail(e) {
    e.preventDefault();
    setUserEmail('');
    console.log(userEmail);
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form action="">
        <input
          type="email"
          placeholder="Digite seu Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
