import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTokenFromApi } from '../services/requestApi';

import { userData } from '../redux/actions';
import Header from '../components/Header';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      emailInput: '',
      disabled: true,
      changePath: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState(({
      [name]: target.value,
    }), this.checkButton);
  }

  validate = (name, email) => {
    const min = 1;
    if (name.length >= min && email.length >= min) {
      return true;
    }
    return false;
  }

  checkButton = () => {
    const { nameInput, emailInput } = this.state;
    const validate = this.validate(nameInput, emailInput);
    if (validate) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  playButton = () => {
    getTokenFromApi().then((response) => {
      localStorage.setItem('token', response.token);
      this.setState({ changePath: true });
    });
  }

  render() {
    const { disabled, emailInput, nameInput, changePath } = this.state;
    const { userDispatch } = this.props;
    const userInfo = { emailInput, nameInput };
    return (
      <div>
        <div>
          <Header />
        </div>
        <Link to="/settings">
          <button type="button" data-testid="btn-settings">
            Configurações
          </button>
        </Link>

        <form>
          <label htmlFor="nameInput">
            <input
              type="text"
              data-testid="input-player-name"
              onChange={ this.handleChange }
              name="nameInput"
              value={ nameInput }
              placeholder="Digite seu nome"
            />
          </label>

          <label htmlFor="emailInput">
            <input
              type="email"
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
              name="emailInput"
              value={ emailInput }
              placeholder="Digite seu email"
            />
          </label>

          <button
            type="button"
            data-testid="btn-play"
            onClick={ () => {
              userDispatch(userInfo);
              this.playButton();
            } }
            disabled={ disabled }
          >
            Play
          </button>
        </form>

        { changePath && <Redirect to="/game" />}

      </div>
    );
  }
}

Login.propTypes = {
  userDispatch: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (name) => dispatch(userData(name)),
});

export default connect(null, mapDispatchToProps)(Login);
