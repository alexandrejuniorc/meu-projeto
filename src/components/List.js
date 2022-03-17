import React from 'react';
import Item from '../Item';
import PropTypes from 'prop-types';

const List = () => {
  return (
    /* <> sem nenhum elemento pai é um fragment */
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item />
        <Item marca="Fiat" anoLancamento={1864} />
        <Item marca="Renault" anoLancamento={1985} />
      </ul>
    </>
  );
};

/* define o tipo de cada prop */
/* isRequired define que a const Item tem que ter uma conteúdo na prop marca */
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  anoLancamento: PropTypes.number,
};

/* Define valor padrão para as props caso não seja passado seus parâmetros */
Item.defaultProps = {
  marca: 'Faltou a marca',
  anoLancamento: 0,
};

export default List;
