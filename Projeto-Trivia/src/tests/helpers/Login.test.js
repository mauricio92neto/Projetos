import React from "react";
import App from "../../App";
import Login from "../../pages/Login";
import { renderWithRouterAndRedux } from '../helpers/renderWithRouterAndRedux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Verifica a página de Login', () => {
    it('Verifica a rota da página de Login', () => {
        renderWithRouterAndRedux(<Login />)
        const { history } = renderWithRouterAndRedux(<App />);
        const { pathname } = history.location;
        expect(pathname).toBe('/');
    })
    it('Verifica se existe o botão "Configurações" e a sua rota', () => {
        const { history } = renderWithRouterAndRedux(<App />);
        const btn = screen.getByTestId("btn-settings");
        expect(btn).toBeInTheDocument();
        userEvent.click(btn);
        expect(history.location.pathname).toBe("/"); 
        // esse toBe deveria ser ("/settings")
    })
    it('verifica Input Name', () => {
        renderWithRouterAndRedux(<Login />)
        const name = screen.getByTestId('input-player-name');
        expect(name).toBeInTheDocument;
        userEvent.type(name, "Renata Costa");
        expect(name.value).toBe("Renata Costa");
    })
    it('verifica Input Email', () => {
        renderWithRouterAndRedux(<Login />)
        const email = screen.getByTestId("input-gravatar-email");
        expect(email).toBeInTheDocument;
        userEvent.type(email, "testando@prasempre.com");
        expect(email.value).toBe("testando@prasempre.com");
    })
    it('verifica o botão Play', () => {
        renderWithRouterAndRedux(<Login />)
        const name = screen.getByTestId('input-player-name');
        const email = screen.getByTestId("input-gravatar-email");
        const btnPlay = screen.getByTestId("btn-play");
        expect(btnPlay).toHaveAttribute("disabled");
        userEvent.type(name, 'Dev Ryca');
        userEvent.type(email, 'email@dotrabalho.com');
        expect(btnPlay).not.toHaveAttribute("disabled");
    })
})

describe('teste', () => {
    it("verifica o token API", async () => {
        const token = {
            response_code: 0,
            response_message: "Token Generated Successfully!",
            token: "1df8931e22d6d98d7101a285cfc4df3ec77511ecb6f2f5eafa72d51e996957fc8"
        };

        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(token),
        }));
        renderWithRouterAndRedux(<Login />)
        const name = screen.getByTestId('input-player-name');
        const email = screen.getByTestId("input-gravatar-email");
        const btnPlay = screen.getByTestId("btn-play");
        userEvent.type(name, 'Dev Ryca');
        userEvent.type(email, 'email@dotrabalho.com');
        userEvent.click(btnPlay);
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledTimes(1);
    })
})