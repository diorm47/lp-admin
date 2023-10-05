import React from "react";
import "./nav-bar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const admin = useSelector((user) => user.user.user);

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
            <p>{admin ? admin.username : "-"}</p>
            <DownArrow />
          </div>
          <p className="profile_email">{admin ? admin.email : "-"}</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
