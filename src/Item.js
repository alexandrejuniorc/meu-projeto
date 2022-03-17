import React from 'react';

const Item = ({ marca, anoLancamento }) => {
  return (
    <>
      <li>
        {marca} - {anoLancamento}
      </li>
    </>
  );
};

export default Item;
