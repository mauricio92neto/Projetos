import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { user: null };
  }

  newGetUser = () => {
    const { user } = this.state;
    if (user === null) {
      getUser().then((resp) => this.setState({ user: resp }));
      return <Loading />;
    }
    return <h1>{user.name}</h1>;
  };

  render() {
    return (
      <header data-testid="header-component">
        <p
          data-testid="header-user-name"
        >
          {this.newGetUser()}

        </p>

        <ul>
          <li>
            <Link data-testid="link-to-search" to="/search">Search</Link>

          </li>
          <li>
            <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link data-testid="link-to-profile" to="/profile">Profile</Link>
          </li>
        </ul>

      </header>
    );
  }
}

export default Header;
