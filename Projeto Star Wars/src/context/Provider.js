import Proptypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import newContext from './Context';

function Provider({ children }) {
  const [inform, setInform] = useState([]);
  const [infDateFilt, setDateFilt] = useState([]);
  const [namefilter, setNameFilter] = useState({ filterByName: { name: '' } });
  const [filterByNumericValues, setfilterByNumericValues] = useState(
    [{ column: 'population', comparison: 'maior que', value: 0 }],
  );

  useEffect(() => {
    const newPlanet = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((resp) => resp.json());
      setInform(results);
      setDateFilt(results);
    };
    newPlanet();
  }, []);

  function planetChange({ target }) {
    setNameFilter({ name: target.value });
    const planetName = inform.filter((planetas) => planetas.name.includes(target.value));
    setDateFilt(planetName);
  }
  function selectChange({ target }) {
    const valuePlanet = [...filterByNumericValues];
    valuePlanet[0] = { ...valuePlanet[0], [target.name]: target.value };
    setfilterByNumericValues(valuePlanet);
  }

  return (
    <newContext.Provider
      value={ {

        infDateFilt,
        namefilter,
        planetChange,
        filterByNumericValues,
        setDateFilt,
        selectChange,
        setfilterByNumericValues,
      } }
    >
      {children}

    </newContext.Provider>
  );
}

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
