import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { getHasEmailError, getEmailInput } from '../store/store';
import { handleEmailError, handelEmailInput } from '../store/actions';
import './form.scss';

const PassRestForm = () => {
  const hasEmailError = useSelector(getHasEmailError);
  const inputMail = useSelector(getEmailInput);
  const dispatch = useDispatch();

  const handleEmail = (value) => {
    dispatch(handelEmailInput(value));
    dispatch(handleEmailError(false));
  };

  const handleSubmit = (e) => {
    if (!/\S+@\S+\.\S{2,}/.test(inputMail)) {
      e.preventDefault();
      dispatch(handleEmailError(true));
    }
  };

  return (
    <section className="form-wrapper">
      <form
        onSubmit={e => handleSubmit(e)}
        className="form"
      >
        <NavLink
          className="form__arrow-back"
          to="/"
        >
            ←
        </NavLink>

        <h2 className="form__heading form__heading_reset">
            Forgot password?
        </h2>

        <div className="form__field">
          <input
            type="text"
            onChange={e => handleEmail(e.target.value)}
            value={inputMail}
            className={cn('form__input form__input_mail', {
              'form__input-error': hasEmailError,
              'form__input_mail-active': inputMail && !hasEmailError,
            })}
            placeholder="Enter your email"
          />
          {hasEmailError && (
            <div className="error-message">
                  Oops! You entered an invalid email
            </div>
          )}
        </div>

        <button className="form__button">
            Send me instructions
        </button>

      </form>
    </section>
  );
};

export default PassRestForm;
