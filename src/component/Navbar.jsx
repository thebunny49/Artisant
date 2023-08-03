import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar container navbar-expand-lg bg-body-tertiary"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="container-fluid">
          <img src="./artisant1.svg" alt="" />
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="pop navbar-nav n1 me-auto mb-2 mb-lg-0 ml-sm-0 ml-m-0"
              style={{ padding: 20 }}
            >
              <li className="nav-item" style={{ display: "flex",marginRight: 10, }}>
                <img
                  src="./home.png"
                  alt=""
                  style={{
                    width: 15,
                    height: 15,
                    marginTop: 12,
                    marginRight: 5,
                  }}
                />
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ fontWeight: "700" }}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item" style={{ display: "flex",marginRight: 10, }}>
                <img
                  src="./compass.png"
                  alt=""
                  style={{
                    width: 15,
                    height: 15,
                    marginTop: 12,
                    marginRight: 5,
                  }}
                />
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "500" }}
                >
                  Explore
                </a>
              </li>
              <li className="nav-item" style={{ display: "flex" ,marginRight: 10,}}>
                <img
                  src="./briefcase.png"
                  alt=""
                  style={{
                    width: 15,
                    height: 15,
                    marginTop: 12,
                    marginRight: 5,
                  }}
                />
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "500" }}
                >
                  Jobs
                </a>
              </li>
              <li className="nav-item" style={{ display: "flex" ,marginRight: 10,}}>
                <img
                  src="./ssd.png"
                  alt=""
                  style={{
                    width: 15,
                    height: 15,
                    marginTop: 12,
                    marginRight: 5,
                  }}
                />
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "500" }}
                >
                  Feed
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <img
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 5,
                  border: "1px solid black",
                  padding: 5,
                  marginRight: 10,
                }}
                src="./comment.png"
              />
              <img
                style={{ width: 35, height: 35, borderRadius: 5 }}
                src="./rectangle-94@2x.png"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// <div className="collapse navbar-collapse " id="navbarSupportedContent" >
// <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
//
// </ul>
//
// </div>
