import React from 'react';
import {  screen, waitFor } from '@testing-library/react';
import App from '../App';
import {renderWithContext} from './RenderWithContext';
import Mocks from './Mocks';
import {act} from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('verificar requisito 5', () => {
  test('verificar o title',async() =>{
    jest.spyOn(global,"fetch");
    global.fetch.mockResolvedValue({
      json:jest.fn().mockResolvedValue(Mocks),
    });
    await act(async () => renderWithContext(<App/>));
  const linkElement = screen.getByText(/Hello, App!/i);
  const btn = screen.getByRole('button',{name:/filtrar/i})
  expect(linkElement).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  userEvent.click(btn)
  screen.logTestingPlaygroundURL()
})
test('verificar planetas filtrados', async() => {
  jest.spyOn(global,"fetch");
  global.fetch.mockResolvedValue({
    json:jest.fn().mockResolvedValue(Mocks),
});
await act(async() => renderWithContext(<App/>));
const valor = screen.getByTestId('value-filter')
const coluna = screen.getByTestId('column-filter')
const compar = screen.getByTestId('comparison-filter')
const botn = screen.getByRole('button',{name:/Filtrar/i})

userEvent.selectOptions(coluna, 'surface_water')
userEvent.selectOptions(compar, 'igual a')
userEvent.type(valor, '1')
await waitFor(() => screen.getByText('Tatooine'))
userEvent.click(botn)

expect(coluna).toBeInTheDocument();
expect(compar).toBeInTheDocument();
expect(valor).toBeInTheDocument();
expect(botn).toBeInTheDocument();

});
test('verificar planetas filtrados', async() => {
  jest.spyOn(global,"fetch");
  global.fetch.mockResolvedValue({
    json:jest.fn().mockResolvedValue(Mocks),
  });

await act(async() => renderWithContext(<App/>));
const valor = screen.getByTestId('value-filter')
const coluna = screen.getByTestId('column-filter')
const compar = screen.getByTestId('comparison-filter')
const botn = screen.getByRole('button',{name:/Filtrar/i})

userEvent.selectOptions(coluna,'surface_water')
userEvent.selectOptions(compar,'menor que')
userEvent.type(valor,'1')
await waitFor(() => screen.getByText('Tatooine'))
userEvent.click(botn)

expect(coluna).toBeInTheDocument();
expect(compar).toBeInTheDocument();
expect(valor).toBeInTheDocument();
expect(botn).toBeInTheDocument();
});
});