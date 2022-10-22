import React, { useContext, useState } from 'react';
import newContext from '../context/Context';

function FilterSelect() {
  const { filterByNumericValues, selectChange, setfilterByNumericValues,
    setDateFilt, infDateFilt } = useContext(newContext);
  const [colunaState, setColunaState] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  function newClick() {
    const startNew = [];
    const { column, comparison, value } = filterByNumericValues[0];
    const newArray = [...colunaState];
    const newState = [...filterByNumericValues];
    const removerItem = colunaState.indexOf(column);

    newArray.splice(removerItem, 1);
    newState[0] = { ...newState[0], column: newArray[0] };
    setColunaState(newArray);
    setfilterByNumericValues(newState);

    if (comparison === 'maior que') {
      infDateFilt.forEach((item) => {
        if (Number(item[column]) > value) {
          startNew.push(item);
        }
      });
    }
    if (comparison === 'menor que') {
      infDateFilt.forEach((item) => {
        if (Number(item[column]) < value) {
          startNew.push(item);
        }
      });
    }
    if (comparison === 'igual a') {
      infDateFilt.forEach((elem) => {
        if (elem[column] === value) {
          startNew.push(elem);
        }
      });
    }
    setDateFilt(startNew);
  }

  return (
    <div>

      <label htmlFor="column-filter">
        Filtrar
        <select
          data-testid="column-filter"
          name="column"
          onChange={ selectChange }
        >
          {colunaState.map((elem) => (<option key={ elem }>{elem}</option>))}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Filtro de Comparar
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ selectChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value"
          data-testid="value-filter"
          type="number"
          min="0"
          value={ filterByNumericValues[0].value }
          onChange={ selectChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ newClick }
      >
        Filtrar
      </button>
    </div>
  );
}
export default FilterSelect;
