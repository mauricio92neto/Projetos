import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteThunk } from '../redux/actions';

class Table extends Component {
eventClick = (event) => {
  const { deleteDispatch, currencyState } = this.props;
  const cadastro = { id: event.target.name, currencyState };
  deleteDispatch(cadastro);
}

render() {
  const { currencyState } = this.props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {currencyState.map((item) => (
            <tr key={ item.id }>
              <td>{item.tag}</td>
              <td>{item.description}</td>
              <td>{item.method}</td>
              <td>{(Number(item.value)).toFixed(2)}</td>
              <td>{(Number(item.exchangeRates[item.currency].ask)).toFixed(2)}</td>
              <td>{item.currency}</td>
              <td>
                {(Number(item.exchangeRates[item.currency]
                  .ask * item.value)).toFixed(2)}
              </td>
              <td>{item.exchangeRates[item.currency].name}</td>
              <td key={ item.id }>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ this.eventClick }
                  name={ item.id }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
}
const mapStateToProps = (state) => ({
  currencyState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (payload) => dispatch(deleteThunk(payload)),
});

Table.propTypes = {
  currencyState: PropTypes.array,
}.isRequired;
export default connect(mapStateToProps, mapDispatchToProps)(Table);
