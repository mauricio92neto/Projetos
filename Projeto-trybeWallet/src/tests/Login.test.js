import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux} from './helpers/renderWith';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Verificar pagina de Login', () => {
  test('Verifica se é a rota /', () => {
   const { history } = renderWithRouterAndRedux(<App />);
  
    expect(history.location.pathname).toBe('/');
  });
  test('Verificar se tem o texto na pagina', () => {
    renderWithRouterAndRedux(<App/>)
    const textLogin = screen.getByText(/Login/i)
    expect(textLogin).toBeInTheDocument();
  })
  test('Verificar se existe dois input', () => {
    renderWithRouterAndRedux(<App />);
    screen.logTestingPlaygroundURL()
    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');
    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });
  test('Verificar se o email é valido', () => {
    renderWithRouterAndRedux(<App/>);
    const btnStart = screen.getByRole('button', {
      name: /entrar/i
  })
  const email = screen.getByTestId('email-input');
  const senha = screen.getByTestId('password-input');

  userEvent.type(email, '123')
  userEvent.type(senha, '123')
  expect(btnStart).toHaveAttribute('disabled')
});
test('Verifica se a senha é valida', () => {
  renderWithRouterAndRedux(<App/>);
  const btnStart = screen.getByRole('button', {
    name: /entrar/i
})
 const email = screen.getByTestId('email-input');
 const pass = screen.getByTestId('password-input');

 userEvent.type(email, 'testando@apptrybe.com')
 userEvent.type(pass, '123456')
  expect(btnStart).not.toHaveAttribute('disabled')
});
test('Verifica se ao clicar no botao a pagina é redirecionada', () => {
  const { history } = renderWithRouterAndRedux(<App/>);
  const btnStart = screen.getByRole('button', {
    name: /entrar/i
})
 const email = screen.getByTestId('email-input');
 const passoW = screen.getByTestId('password-input');

 userEvent.type(email, 'testando@apptrybe.com')
 userEvent.type(passoW, '123456')
  expect(btnStart).not.toHaveAttribute('disabled')
  userEvent.click(btnStart)
  expect(history.location.pathname).toBe('/carteira')
});
});