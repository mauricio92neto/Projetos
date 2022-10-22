import { SAVE_MOEDAS, ADD_DESPESAS, PREVENT_ERROR, DELETE_ITEM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_MOEDAS:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_DESPESAS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case PREVENT_ERROR:
    return {
      ...state,
      error: action.error,
    };
  case DELETE_ITEM:
    return {
      ...state,
      expenses: action.payload,

    };
  default:
    return state;
  }
};

export default wallet;
