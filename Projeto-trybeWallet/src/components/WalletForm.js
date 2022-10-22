import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionThunk, fetchApiDispatch } from '../redux/actions';

const foodSpeed = 'Alimentação';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: foodSpeed,
  }

  componentDidMount() {
    const { fetchDispatchCurr } = this.props;
    fetchDispatchCurr();
  }

  eventClick = () => {
    const { id, value, description, currency, method, tag } = this.state;
    const { despesasDispatch } = this.props;

    const stateObj = { id, value, description, currency, method, tag };
    despesasDispatch(stateObj);
    console.log(stateObj);
    this.setState({ id: id + 1 });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: foodSpeed,
    });
  }

  eventChange = (event) => {
    const { value, name } = event.target;
    this.setState({

      [name]: value,
    });
  }

  render() {
    const { stateNewMoedas } = this.props;

    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        WalletForm
        <form>
          <div>
            <label htmlFor="addDespesa">
              Valor da despesa
              <input
                data-testid="value-input"
                // value é minha key
                name="value"
                id="add-despesa"
                onChange={ this.eventChange }
                value={ value }
                type="number"
              />
            </label>
          </div>
          <div>
            <label htmlFor="descricaoDespesa">
              Descrição das despesas
              <input
                data-testid="description-input"
                name="description"
                id="descricao-despesa"
                onChange={ this.eventChange }
                value={ description }
              />
            </label>
          </div>
          <label htmlFor="select">
            Selecionar a moeda
            <select
              data-testid="currency-input"
              id="selected"
              name="currency"
              value={ currency }
              onChange={ this.eventChange }
            >
              { stateNewMoedas && stateNewMoedas
                .map((item) => (<option key={ item }>{item}</option>))}

            </select>
          </label>
          <label htmlFor="add-method">
            Selecione a forma de pagamento
            <select
              data-testid="method-input"
              id="method"
              name="method"
              value={ method }
              onChange={ this.eventChange }
            >
              <option>
                Dinheiro
              </option>
              <option>
                Cartão de crédito
              </option>
              <option>
                Cartão de débito
              </option>
            </select>
          </label>
          <label htmlFor="add-tag">
            Selecione uma categoria
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.eventChange }
            >
              <option>
                Alimentação
              </option>
              <option>
                Lazer
              </option>
              <option>
                Trabalho
              </option>
              <option>
                Transporte
              </option>
              <option>
                Saúde
              </option>
            </select>
          </label>
          <div>
            <button
              type="button"
              onClick={ this.eventClick }
            >
              Adicionar despesa
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateNewMoedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDispatchCurr: () => dispatch(fetchApiDispatch()),
  despesasDispatch: (payload) => dispatch(actionThunk(payload)),
});

WalletForm.propTypes = {
  fetchDispatchCurr: PropTypes.func.isRequired,
  despesasDispatch: PropTypes.func.isRequired,
  stateNewMoedas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
