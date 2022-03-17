import React from 'react';

const OutraLista = ({ itens }) => {
  return (
    <>
      <h3>Itens:</h3>
      {itens.length > 0 ? (
        itens.map((item) => <p key={item}>{item}</p>)
      ) : (
        <p>Não há itens na lista!</p>
      )}
    </>
  );
};

export default OutraLista;
