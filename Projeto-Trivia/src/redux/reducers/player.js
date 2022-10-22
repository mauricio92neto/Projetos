import { USER_INFORMATION, USER_SCORE, USER_ASSERTIONS } from '../actions';

const INITIAL_STATE = {
  userData: {},
  score: 0,
  assertions: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFORMATION:
    return {
      ...state,
      userData: { ...state.userData, ...action.name },
    };
  case USER_SCORE:
    return {
      ...state,
      score: state.score + 1,
    };
  case USER_ASSERTIONS:
    return {
      ...state,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
};

export default player;
