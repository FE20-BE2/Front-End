import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BiUserCircle } from "react-icons/bi";
import "./Sidebar.css";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className="text-decoration-none d-flex align-item-center ms-3 mt-2">
              <i className="bi"></i>
              <span className="ms-1 fs-4">Haloo</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column">
              <li class="nav-item text-white fs-4">
                <Link
                  to="/"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <span className="ms-2">Artikel</span>
                </Link>
              </li>
              <li class="nav-item text-white fs-4">
                <Link
                  to="/mentor"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <span>
                    <BiUserCircle className="mx-2" />
                    Mentor
                  </span>
                </Link>
              </li>
              <li class="nav-item text-white fs-4">
                <Link class="nav-link text-white fs-5" aria-current="page">
                  <span className="ms-2">Kelas</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
