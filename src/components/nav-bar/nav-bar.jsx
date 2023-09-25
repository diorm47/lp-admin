import React from "react";
import "./nav-bar.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div className="nav_wrapper">
        <NavLink to="/">
          <div className="nav_logo">
            <Logo />
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
