import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  " id="navbar">
        <div class="container-fluid">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon bg-primary">
              <i class="bi bi-three-dots-vertical"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" id="item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item" id="item">
                <a class="nav-link" href="#">
                  Link1
                </a>
              </li>
              <li class="nav-item" id="item">
                <a class="nav-link" href="#">
                  Link2
                </a>
              </li>

              <li class="nav-item" id="item">
                <a class="nav-link" href="#">
                  Link3
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success text-white "
                type="submit"
                id="btn"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
