import React from 'react';

/* propriedades desestruturadas */
const Pessoa = ({ nome, idade, profissao, foto }) => {
  return (
    <div>
      {/* Componente que contém os dados da pessoa */}
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
};

export default Pessoa;
