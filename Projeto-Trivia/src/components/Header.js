import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MD5 } from 'crypto-js';

class Header extends React.Component {
  render() {
    const { userDispatch, userScore } = this.props;
    const { nameInput, emailInput } = userDispatch;
    const emailToString = MD5(emailInput).toString();
    const srcImg = `https://www.gravatar.com/avatar/${emailToString}`;
    return (
      <>
        <img
          src={ (emailInput) && srcImg }
          alt={ (emailInput) && 'img-profile' }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{ nameInput }</p>
        <p data-testid="header-score">{ userScore }</p>
      </>
    );
  }
}

Header.propTypes = {
  userDispatch: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  userDispatch: state.player.userData,
  userScore: state.player.score,
});

export default connect(mapStateToProps)(Header);
