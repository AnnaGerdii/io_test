import React, { useState } from 'react';
import './form.scss';
import cn from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmailInput, getHasEmailError } from '../store/store';
import { handelEmailInput, handleEmailError } from '../store/actions';

const LoginForm = ({ history }) => {
  const hasEmailError = useSelector(getHasEmailError);
  const inputMail = useSelector(getEmailInput);
  const dispatch = useDispatch();
  const [inputPass, setInputPass] = useState('');
  const [hasPassError, setPassError] = useState(false);

  const handleEmail = (value) => {
    dispatch(handelEmailInput(value));
    dispatch(handleEmailError(false));
  };

  const handlePassword = (value) => {
    setInputPass(value);
    setPassError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputPass.length < 8) {
      setPassError(true);
    }

    if (!/\S+@\S+\.\S{2,}/.test(inputMail)) {
      dispatch(handleEmailError(true));
    } else if (inputPass.length >= 8) {
      history.push({ pathname: '/n.delyukin' });
    }
  };

  return (
    <section className="form-wrapper">
      <form
        onSubmit={e => handleSubmit(e)}
        className="form"
      >
        <h2 className="form__heading">
            Welcome back
        </h2>
        <h3 className="form__sub-heading">
            Sign in to continue to IO Technologies.
        </h3>
        <div className="form__field">
          <input
            type="text"
            onChange={e => handleEmail(e.target.value)}
            value={inputMail}
            className={cn('form__input form__input_mail', {
              'form__input-error': hasEmailError,
              'form__input_mail-active': inputMail && !hasEmailError,
            })}
            placeholder="Your email"
          />
          {hasEmailError && (
            <div className="error-message">
                  Oops! You entered an invalid email
            </div>
          )}
        </div>

        <div className="form__field">
          <input
            type="password"
            onChange={e => handlePassword(e.target.value)}
            className={cn('form__input form__input_pass', {
              'form__input-error': hasPassError,
              'form__input_pass-active': inputPass && !hasPassError,
            })}
            placeholder="Password"
          />
          {hasPassError && (
            <div className="error-message error-message-pass">
                  Your password must contain at least 8 characters
            </div>
          )}
        </div>

        <button
          className="form__button"
          type="submit"
        >
            Log in
          {' '}
          <span className="form__arrow">→</span>
        </button>

        <p className="form__pass-reset">
            Forgot you password?
          <NavLink
            className="form__pass-reset-link"
            to="/password-reset"
          >
              Reset
          </NavLink>
        </p>
      </form>
    </section>
  );
};

export default withRouter(LoginForm);

LoginForm.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
