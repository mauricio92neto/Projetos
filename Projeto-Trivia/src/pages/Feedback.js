import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { userScore, userAssertions } = this.props;
    const num = 3;
    return (
      <>
        <Header />
        <h2 data-testid="settings-title">Fim de jogo</h2>

        <p data-testid="feedback-total-score">
          { userScore }
        </p>

        <p data-testid="feedback-total-question">
          { userAssertions }
        </p>

        { userScore < num && (
          <p data-testid="feedback-text">Could be better...</p>
        )}
        { userScore >= num && (
          <p data-testid="feedback-text">Well Done!</p>
        )}
        <Link to="/">
          <button
            type="button"
            data-testid="btn-play-again"
          >
            Play Again
          </button>
        </Link>
        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">
            Ranking
          </button>
        </Link>
      </>
    );
  }
}

Feedback.propTypes = {
  userScore: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  userScore: state.player.score,
  userAssertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
