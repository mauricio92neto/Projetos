import { TIME } from '../actions';

const INITIAL_STATE = {
  secondTime: false,
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TIME:
    return {

      secondTime: true,
    };
  default:
    return state;
  }
};

export default timer;
