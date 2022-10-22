import React from "react";
import Game from "../../pages/Game";
import { renderWithRouterAndRedux } from '../helpers/renderWithRouterAndRedux';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Timer from '../../components/Timer';
import App from '../../App';
import questionsMock from '../mocks/mockQuestions';
import Login from '../../pages/Login';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../../redux/reducers/index'

describe('Verifica a página de game', () => {
    it('Verifica se o placar inicia zerado', () => {
        renderWithRouterAndRedux(<Game />)

        const score = screen.getByTestId('header-score');
        expect(score).toBeInTheDocument();
    })
    it('Verifica se existe um timer', () => {
        renderWithRouterAndRedux(<Timer />)

        const timer = screen.getByTestId('timer-game');
        expect(timer).toBeInTheDocument();
    })
    it('Verifica se passa para página de game ', async () => {
        const { history } = renderWithRouterAndRedux(<Login />)
        const name = screen.getByTestId('input-player-name');
        const email = screen.getByTestId("input-gravatar-email");
        const btnPlay = screen.getByTestId("btn-play");

        userEvent.type(name, 'Dev Ryca');
        userEvent.type(email, 'email@dotrabalho.com');
        userEvent.click(btnPlay);

        await waitFor(() =>
            expect(history.location.pathname).toBe('/game'));

        const nameUser = screen.getByText(/Dev Ryca/i)
        expect(nameUser).toBeInTheDocument();
    })
    it('Verifica se é renderizada a pergunta', async () => {
        createStore(rootReducer, questionsMock);
        renderWithRouterAndRedux(<App />, {
            initialState: questionsMock,
        })
        const name = screen.getByTestId('input-player-name');
        const email = screen.getByTestId("input-gravatar-email");
        const btnPlay = screen.getByTestId("btn-play");
        userEvent.type(name, 'Dev Ryca');
        userEvent.type(email, 'email@dotrabalho.com');
        userEvent.click(btnPlay);
        await waitFor(() => expect(screen.getByTestId(/correct-answer/i)).toBeInTheDocument(), { timeout: 3000 });
        await waitFor(() => expect(screen.getByTestId(/timer-game/i)).toBeInTheDocument(), { timeout: 3000 });
        await waitFor(() => expect(screen.getByTestId(/wrong-answer-0/i)).toBeInTheDocument(), { timeout: 3000 });
        const correctButton = screen.getByTestId('correct-answer');
        userEvent.click(correctButton);
        const nextButton = screen.getByTestId('btn-next');
        await waitFor(() => expect(nextButton).toBeInTheDocument(), { timeout: 1000 });
        userEvent.click(nextButton);
    })
})