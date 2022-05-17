import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import "./Nav.css";

export const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={cn({ nav: true, nav__black: showNavbar })}>
      <div className="nav__content">
        <Link to="/">
          <img
            className="nav__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        </Link>

        <Link to="/profile">
          <img
            className="nav__avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdV711pPFhn4_4ampOgfW1sPRM7pRXYWlzw&usqp=CAU"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
