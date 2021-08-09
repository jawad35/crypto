import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bs-example">
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top "
        style={{ backgroundColor: "#4150a6", color: "white" }}
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
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: "20px", lineHeight: "14px" }}
        >
          <ul class="navbar-nav mr-auto d-flex align-items-lg-center align-items-xl-center mb-1">
            <li class="nav-item activ ">
              <Link
                to="/"
                className="text-white font-weight-bolder nav-item nav-link active"
              >
                Buy STC Token
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/"
                className="text-white font-weight-bolder nav-item nav-link"
              >
                Roadmap
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/"
                className="text-white font-weight-bolder nav-item nav-link"
              >
                Team
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="text-white"
                style={{ fontWeight: "bolder" }}
              >
                Ecosystem
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="#">
                  Learning
                </Link>
                <Link class="dropdown-item" to="#">
                  Wallet
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="#">
                  Exchange
                </Link>
              </div>
            </li>
          </ul>
          {/* <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
          <button
            class="btn  my-2 my-sm-0 text-white"
            type="submit"
            style={{ border: "1px solid white", fontWeight: "bolder" }}
          >
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
