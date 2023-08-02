import React from "react";
// import { useState } from "react";
// import NavbarItems from "./NavItems";
// import { Link } from "react-router-dom";
const Navbar = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   const handleNavItemClick = () => {
  //     setIsMenuOpen(false);
  //   };

  //   const handleButtonClick = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   };

  return (
    <>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand ps-4 fw-bold">Recruitment</div>
            {/* <div
              onClick={handleButtonClick}
              className="navbar-toggler"
              // type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {NavbarItems.map((item, ind) => (
                  <li key={ind} className="nav-item">
                    <div
                      href={item.path}
                      className="nav-link active"
                      aria-current="page"
                      onClick={handleNavItemClick}
                    >
                      {item.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
