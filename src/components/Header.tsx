import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activee" : " inactivee"
              }
            >
              Read
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? "activee" : "inactivee")}
            >
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
