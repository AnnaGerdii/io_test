import { SET_EMAIL_ERROR, UPDATE_EMAIL_INPUT } from './actions';

const initialState = {
  hasEmailError: false, mailInput: '',
};

const emailReducer = (state = initialState, action) => {
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

export default emailReducer;
