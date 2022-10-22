import React from "react";
import Header from "../components/Header";
import {screen} from '@testing-library/react';
import {renderWithRouterAndRedux} from './helpers/renderWith';

const initial_state = {
  user: {
      email: 'trybe@teste.com',
  },
  wallet: {
      currency: ['USD'],
      expenses: [
          {
   id: 0,
    value: '1',
    description: 'Um dólar',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Transporte',
    exchangeRates: {
      USD: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '5.3137',
        low: '5.2461',
        varBid: '-0.0078',
        pctChange: '-0.15',
        bid: '5.2703',
        ask: '5.271',
        timestamp: '1659542827',
        create_date: '2022-08-03 13:07:07',
  }
        }

  }
]
}
}
describe('Verificar a pagina Header', ()=> {

  test('verificar se existe somador', ()=> {
    renderWithRouterAndRedux(<Header />,{initialState: initial_state})
    const somador = screen.queryByText(/5.27/i)

    expect(somador).toBeInTheDocument();
    expect(somador).toHaveTextContent('5.27')
  });
  test('verificar email aparece na tela', () => {
    renderWithRouterAndRedux(<Header /> ,{ initialState: initial_state})
    const email = screen.getByTestId('email-field')
    expect(email).toHaveTextContent('trybe@teste.com')
  });
});