import React from "react";
import { Link } from "react-router-dom";

function Navs() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/rent">For Sale</Link>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/rent">For Rent</Link>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/short-rent">Short Rent</Link>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/short-rent">Agents</Link>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/short-rent">Login</Link>
        </li>
        <li className="main-nav__item main-nav__item-cta">
          <Link to="/short-rent">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navs;
