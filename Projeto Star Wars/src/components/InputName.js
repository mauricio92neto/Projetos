import React, { useContext } from 'react';
import newContext from '../context/Context';

function InputName() {
  const { planetChange } = useContext(newContext);
  return (
    <div>
      <label htmlFor="input">

        <input
          name="input-text"
          data-testid="name-filter"
          onChange={ planetChange }
          placeholder="Pesquisar Planeta"
        />
      </label>
    </div>

  );
}
export default InputName;
