import { USER_INFORMATION, USER_SCORE } from '../actions';

const INITIAL_STATE = {
  userData: {},
  score: 0,
};

const user = (state = INITIAL_STATE, action) => {
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
  default:
    return state;
  }
};

export default user;
