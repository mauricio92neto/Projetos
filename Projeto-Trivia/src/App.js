import React from 'react';
// import logo from './trivia.png';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './components/Ranking';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/ranking" component={ Ranking } />
    </BrowserRouter>
  );
}
