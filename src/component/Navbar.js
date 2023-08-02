import React from "react";
import Profile from "./google.auth/Profile.auth";
const Navbar = () => {
  return (
    <>
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid " style={{ height: "4rem" }}>
            <div className="navbar-brand ps-4 fw-bold">Recruitment</div>
            <div className="d-flex justify-content-end align-items-center ">
              <Profile />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
