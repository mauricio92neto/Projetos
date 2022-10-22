import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { secondTime } from '../redux/actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    const segundo = 1000;
    const timer = setInterval(
      () => this.passaTempo(timer),
      segundo,
    );
  }

passaTempo = () => {
  const { timer } = this.state;
  const { timeDispatch } = this.props;
  if (timer === 0) {
    timeDispatch(true);
  } else {
    this.setState((prevState) => ({
      timer: prevState.timer - 1,
    }));
  }
}

render() {
  const { timer } = this.state;
  return (
    <div>
      <span data-testid="timer-game">
        Timer:
        { timer }
      </span>
    </div>
  );
}
}

Timer.propTypes = {
  timeDispatch: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  timeDispatch: (timer) => dispatch(secondTime(timer)),
});

export default connect(null, mapDispatchToProps)(Timer);
