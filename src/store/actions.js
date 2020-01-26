export const UPDATE_EMAIL_INPUT = 'UPDATE_EMAIL_INPUT';
export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';

export const handleEmailError = hasEmailError => ({
  type: SET_EMAIL_ERROR,
  hasEmailError,
});

export const handelEmailInput = mailInput => ({
  type: UPDATE_EMAIL_INPUT,
  mailInput,
});
