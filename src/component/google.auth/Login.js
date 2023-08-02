import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/action/Authe.action";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { AiOutlineLogin } from "react-icons/ai";
import { Tosted } from "./Tosted";

const Login = ({ setShowDropdown }) => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      dispatch(login(result._tokenResponse));
      setShowDropdown(false);
      Tosted("Login successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="button-17 d-flex align-items-center"
      style={{ cursor: "pointer" }}
    >
      Login
      <AiOutlineLogin />
    </button>
  );
};

export default Login;
