import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { headerState, expensesState } = this.props;
    return (
      <div>
        Header
        <header>
          <p data-testid="email-field">{headerState}</p>
          <p data-testid="total-field">
            {expensesState.reduce((acc, cur) => {
              const valores = Number(cur.value);
              const moeda = cur.currency;
              const atualMoeda = Number(cur.exchangeRates[moeda].ask);
              const mult = valores * atualMoeda;
              acc += mult;
              return Math.round(acc * 100) / 100;
            }, 0).toFixed(2)}

          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  headerState: state.user.email,
  expensesState: state.wallet.expenses,
});
Header.propTypes = {
  headerState: PropTypes.string,
  expensesState: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
