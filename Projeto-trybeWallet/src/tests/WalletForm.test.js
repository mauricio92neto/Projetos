import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux} from './helpers/renderWith';
import WalletForm from '../pages/Wallet';
import userEvent from '@testing-library/user-event';

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
describe('Verificar pagina da carteira', () => {
    test('Verificar se existe os componentes na tela', async () => {
        renderWithRouterAndRedux(<WalletForm/>, {initialState:initial_state});
        const value = screen.getByTestId('value-input');
        const description = screen.getByTestId('description-input');
        const selected = screen.getByTestId('currency-input');
        const btn = screen.getByRole('button', {
            name: /adicionar Despesa/i
        })
        expect(value).toBeInTheDocument();
        userEvent.type(value, '2');
        userEvent.type(description, 'Dois dólar');
        userEvent.click(btn)
        expect(await screen.findByRole('cell', {
            name: /dois dólar/i
        })).toHaveTextContent('Dois dólar')
        expect(selected).toHaveAttribute('name', 'currency' )
        screen.logTestingPlaygroundURL()
    });
});