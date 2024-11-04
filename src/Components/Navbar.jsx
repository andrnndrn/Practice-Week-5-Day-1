import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-cstm ">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="/">AstroPaper</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="nav-cstm navbar-toggler-icon navbar-cstm"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Tags
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <i className="bi bi-sun"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
