export const ADD_USER = 'ADD_USER';
export const ADD_DESPESAS = 'ADD_DESPESAS';
export const SAVE_MOEDAS = 'SAVE_MOEDAS';
export const PREVENT_ERROR = 'PREVENT_ERRO';
export const DELETE_ITEM = 'DELETE_ITEM';

export const userReducer = (payload) => ({ type: 'ADD_USER', payload });

export const actionAddDespesa = (payload) => ({ type: 'ADD_DESPESAS', payload });

export const actionMoeda = (payload) => ({ type: 'SAVE_MOEDAS', payload });

export const actionError = (error) => ({ type: 'PREVENT_ERROR', error });

export const deleteItem = (payload) => ({ type: 'DELETE_ITEM', payload });

export const newApi = () => {
  const myFetchApi = fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))));
  return myFetchApi;
};

export function fetchApiDispatch() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const chaves = Object.keys(data);
        console.log(data);
        dispatch(actionMoeda(chaves.filter((elem) => elem !== 'USDT')));
      });
  };
}

export const actionThunk = (payload) => async (dispatch) => {
  try {
    const response = await newApi();
    delete response.USDT;

    const payload2 = response;

    const keyArray = { ...payload, exchangeRates: payload2 };

    dispatch(actionAddDespesa(keyArray));
  } catch (err) {
    dispatch(actionError(err));
  }
};

export const deleteThunk = (payload) => (dispatch) => {
  const { id, currencyState } = payload;
  const removeText = currencyState.filter((item) => item.id !== Number(id));
  dispatch(deleteItem(removeText));
};
