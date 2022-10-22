import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userReducer } from '../redux/actions';

class Login extends React.Component {
    state = {
      email: '',
      acessar: true,
    }

   addBtnSenha = (event) => {
     const { value } = event.target;
     const { email } = this.state;
     const minimo = 6;
     const reg = /\S+@\S+\.\S+/;
     console.log(reg.test(email));
     if (value.length >= minimo && email.match(reg)) {
       this.setState({
         acessar: false,
       });
     } else {
       this.setState({
         acessar: true,
       });
     }
   }

btnEmail = (event) => {
  const { value } = event.target;
  this.setState({
    email: value,
  });
}

dispatchBtn = () => {
  const { email } = this.state;
  const { userDispatch } = this.props;
  userDispatch(email);
}

render() {
  const { acessar, email } = this.state;
  const { userDispatch } = this.props;
  return (
    <div>
      Login
      <form>
        <label htmlFor="inputs">
          Email
          <input
            id="email"
            data-testid="email-input"
            name="email"
            type="text"
            onChange={ this.btnEmail }
          />

        </label>
        <label htmlFor="senha">
          Senha
          <input
            id="senha"
            data-testid="password-input"
            type="text"
            name="senha"
            onChange={ this.addBtnSenha }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ acessar }
            onClick={ () => userDispatch(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
}
}
const mapDispatchToProps = (dispatch) => ({
  userDispatch: (email) => dispatch(userReducer(email)),
});

Login.propTypes = {
  userDispatch: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
