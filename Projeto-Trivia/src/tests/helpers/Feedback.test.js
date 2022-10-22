import React from "react";
import App from "../../App";
import Feedback from "../../pages/Feedback";
import { renderWithRouterAndRedux } from '../helpers/renderWithRouterAndRedux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Verifica a página de feedback', () => {
    it('Verifica se existe a imagem de perfil', () => {
        renderWithRouterAndRedux(<Feedback />)
        
        const img = screen.getByTestId('header-profile-picture');
        expect(img).toBeInTheDocument();
    })
    it('Verifica se existe o título de fim de jogo', () => {
        renderWithRouterAndRedux(<Feedback />)

        const title = screen.getByTestId('settings-title');
        expect(title).toBeInTheDocument();
    })
    it('Verifica se existe o botão de play again e ranking', () => {
        renderWithRouterAndRedux(<Feedback />)
        
        const btn = screen.getByTestId('btn-play-again');
        const btn2 = screen.getByTestId('btn-ranking');
        expect(btn).toBeInTheDocument();
        expect(btn2).toBeInTheDocument();
    })
})