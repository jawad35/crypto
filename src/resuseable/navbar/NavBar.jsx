import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="bs-example">
      <nav
        className=" navbar navbar-expand-md navbar-light fixed-top "
        style={{ backgroundColor: "#4150a6" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand border-1 ">
            <i
              style={{
                color: "white",
                fontSize: "30px",
                border: "1px solid",
                padding: "14px",
                borderRadius: "50%",
              }}
              className="fas fa-graduation-cap"
            ></i>
          </Link>
          <h5 style={{ color: "white" }}>Student Coin</h5>
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="/navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarCollapse"
          style={{ marginLeft: "300px", color: "white" }}
        >
          <div className="navbar-nav">
            <Link
              to="/"
              className="text-white font-weight-bolder nav-item nav-link active"
            >
              Buy STC Token
            </Link>
            <Link
              to="/"
              className="text-white font-weight-bolder nav-item nav-link"
            >
              Roadmap
            </Link>
            <Link
              to="/"
              className="text-white font-weight-bolder nav-item nav-link"
            >
              Team
            </Link>
            <Link
              to="/"
              className="text-white font-weight-bolder nav-item nav-link disabled"
              tabindex="-1"
            >
              Community
            </Link>
          </div>

          <div
            className="px-1 ml-auto navbar-nav"
            style={{
              borderRadius: "10px 10px 10px 10px",
              border: "1px solid white",
            }}
          >
            <Link
              to="/"
              className="text-white nav-item nav-link font-weight-bolder"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
