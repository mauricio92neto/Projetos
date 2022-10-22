import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favoritos from './pages/favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

class App extends React.Component {
  render() {
    <Header />;
    return (
      <>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites">
              <Favoritos />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/profile/edit">
              <ProfileEdit />
            </Route>
            <Route exact path="/*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
