import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabelit: true,
      name: '',
      carregando: false,
      redirecionar: false,
    };
  }

  habilitaEnter = (event) => {
    const total = event.target.value;
    const numer = 3;
    if (total.length >= numer) {
      this.setState({
        disabelit: false,
      });
    } else {
      this.setState({
        disabelit: true,
      });
    }
  }

enterClick = async () => {
  const { name } = this.state;
  this.setState({ carregando: true });
  await createUser({ name, email: '', image: '', description: '' });
  this.setState({ carregando: false, redirecionar: true });
}

handleChange = (event) => {
  console.log(event.target.value);
  this.habilitaEnter(event);
  this.setState({ name: event.target.value });
}

render() {
  const { disabelit, carregando, redirecionar } = this.state;

  return (

    <div data-testid="page-login">
      { carregando && <Loading />}
      { redirecionar && <Redirect to="/search" />}
      <form>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="Username"
            onChange={ this.handleChange }
            data-testid="login-name-input"
            placeholder="name"
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ disabelit }
          onClick={ this.enterClick }
        >
          Enter
        </button>
      </form>
    </div>

  );
}
}
export default Login;
