import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { Login } from "./pages/Login/Login";
import { login, logout } from "./store/user";
import { Profile } from "./pages/Profile/Profile";
import { PrivatRoute } from "./routes/PrivatRoute";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(({ user }) => user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
        localStorage.removeItem("isAuth");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <PrivatRoute
              access={isAuth}
              replaceUrl="/login"
              element={<HomeScreen />}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
