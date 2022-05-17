import React from "react";

export const EntryScreen = ({ signInHandler, value, inputHandler }) => {
  return (
    <>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <div className="loginScreen__input">
        <form>
          <input
            value={value}
            onChange={inputHandler}
            type="email"
            placeholder="Email Address"
          />
          <button className="loginScreen__getStarted" onClick={signInHandler}>
            GET STARTED
          </button>
        </form>
      </div>
    </>
  );
};
