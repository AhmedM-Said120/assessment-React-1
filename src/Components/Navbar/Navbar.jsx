import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-sm navbar-light ${style.navColor}`}>
          <div className="container">
            <NavLink className="navbar-brand text-white fs-2 ms-5 fw-bold" to="home">
              START FRAMEWORK
            </NavLink>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="collapsibleNavId">
              <ul className="navbar-nav   ms-auto mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link text-white fs-6 fw-bold" to="/about">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white fs-6 fw-bold" to="/portfolio">
                    PORTFOLIO
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white fs-6 fw-bold" to="/contact">
                    CONATCT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
