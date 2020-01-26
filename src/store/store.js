import { createStore } from 'redux';
import { SET_EMAIL_ERROR, UPDATE_EMAIL_INPUT } from './actions';

export const getHasEmailError = state => state.hasEmailError;
export const getEmailInput = state => state.mailInput;

const initialState = {
  hasEmailError: false, mailInput: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_EMAIL_ERROR:
      return {
        ...state,
        hasEmailError: action.hasEmailError,
      };

    case UPDATE_EMAIL_INPUT:
      return {
        ...state,
        mailInput: action.mailInput,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;


