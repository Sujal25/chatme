import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { socket } from "../socket";
import "./Login.css";

// ✅ Use ENV variable
const API = process.env.REACT_APP_API_URL;

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    };

    // Register socket user
    socket.emit("register_user", userData.email);

    // Save user to DB using ENV URL
    await fetch(`${API}/save-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    navigate("/chat");
  };

  return (
    <div className="login">
      <h1>Welcome to ChatMe</h1>
      <button onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;