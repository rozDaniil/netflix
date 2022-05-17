import React from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import { Nav } from "../../component/Navbar/Nav";
import { auth } from "../../firebase";
import { setAuth } from "../../store/user";
import { PlanScreen } from "../../component/PlanScreen/PlanScreen";

export const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);

  const logoutHandler = () => {
    dispatch(setAuth(false));
    signOut(auth);
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdV711pPFhn4_4ampOgfW1sPRM7pRXYWlzw&usqp=CAU"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button
                onClick={logoutHandler}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
