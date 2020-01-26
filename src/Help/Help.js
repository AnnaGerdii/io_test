import React from 'react';
import './Help.scss';

export const Help = () => (
  <section className="help">
    <article className="help__info">
      <h1 className="help__company-title company-title">
        <img
          src="./images/logo.png"
          alt="logo"
          className="logo"
        />
        <span className="company-title__text">Technologies</span>
      </h1>
      <p className="help__text">
          Get how-to-help and instructions or specific features in
      </p>

      <div className="help__buttons">
        <button
          className="help__button"
          type="button"
        >
            Help Center
        </button>
        <span>or</span>
        <button
          className="help__button"
          type="button"
        >
            Support
        </button>
      </div>
    </article>
  </section>
);
