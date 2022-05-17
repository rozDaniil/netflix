import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignInScreen.css";

import { auth } from "../../firebase";
import { setAuth } from "../../store/user";

export const SignInScreen = ({ value, inputHandler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const authLogicFunction = (func) => {
    func(auth, value, passwordRef.current.value)
      .then((authUser) => {
        navigate("/");
        localStorage.setItem("isAuth", true);
        dispatch(setAuth(true));
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    authLogicFunction(createUserWithEmailAndPassword);
  };

  const signIn = (e) => {
    e.preventDefault();
    authLogicFunction(signInWithEmailAndPassword);
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input
          value={value}
          onChange={inputHandler}
          type="email"
          placeholder="Email"
        />
        <input
          autoFocus={value}
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
        <button onClick={signIn}>Sign In</button>
        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
          <span className="signInScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};
