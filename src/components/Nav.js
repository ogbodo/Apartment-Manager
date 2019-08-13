import React from "react";
import { NavLink } from "react-router-dom";

function Navs() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item main-nav__item-cta">
          <NavLink
            to="/"
            exact
            activeStyle={{ borderBottom: "#7b59ff solid 2px" }}
          >
            Home
          </NavLink>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <NavLink
            to="/sale"
            exact
            activeStyle={{ borderBottom: "#7b59ff solid 2px" }}
          >
            For Sale
          </NavLink>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <NavLink
            to="/rent"
            exact
            activeStyle={{ borderBottom: "#7b59ff solid 2px" }}
          >
            For Rent
          </NavLink>
        </li>

        <li className="main-nav__item main-nav__item-cta">
          <NavLink
            to="/agent"
            exact
            activeStyle={{ borderBottom: "#7b59ff solid 2px" }}
          >
            Agents
          </NavLink>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <NavLink
            to="/login"
            exact
            activeStyle={{ borderBottom: "#7b59ff solid 2px" }}
          >
            Login
          </NavLink>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <NavLink
            to="/signup"
            exact
            activeStyle={{ borderBottom: "#7b59ff solid 2px" }}
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navs;
