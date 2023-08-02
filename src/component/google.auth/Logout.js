import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/Authe.action";
import { getAuth } from "firebase/auth";
import { AiOutlineLogout } from "react-icons/ai";
import { Tosted } from "./Tosted";
import "./button.css";
const Logout = ({ setShowDropdown }) => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout(null));
        setShowDropdown(false);

        Tosted("Logout successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <button
      onClick={signOut}
      className="button-17 d-flex align-items-center"
      style={{ cursor: "pointer" }}
    >
      <AiOutlineLogout /> Logout
    </button>
  );
};

export default Logout;
