import React from "react";
import "./nav-bar.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
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
        <div className="nav_profile">
          <div>
            <p>Telegram admin</p>
            <DownArrow />
          </div>
          <p className="profile_email">@lofguim</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
