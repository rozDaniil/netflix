import { useState } from "react";
import { EntryScreen } from "../../component/EntryScreen/EntryScreen";
import { SignInScreen } from "../../component/SignInScreen/SignInScreen";
import "./Login.css";

export const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const signInHandler = () => setSignIn(true);
  const inputHandler = (e) => setUserEmail(e.target.value);

  return (
    <div className="loginScreen">
      <div className="logginScreen__background">
        <img
          className="loginScrreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen__button" onClick={signInHandler}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen value={userEmail} inputHandler={inputHandler} />
        ) : (
          <EntryScreen
            value={userEmail}
            inputHandler={inputHandler}
            signInHandler={signInHandler}
          />
        )}
      </div>
    </div>
  );
};
