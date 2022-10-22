import React from 'react';
import './App.css';
import FilterSelect from './components/FilterSelect';
import InputName from './components/InputName';
import Tabela from './components/Tabela';

function App() {
  return (
    <span>
      Hello, App!
      <FilterSelect />
      <InputName />
      <Tabela />
    </span>
  );
}

export default App;
