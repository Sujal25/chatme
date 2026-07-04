import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) setUser(u);
    });

    return () => unsubscribe(); // ✅ important in production
  }, []);

  const logout = async () => {
    await auth.signOut();
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">
          <img src={user.photoURL} alt="" />

          <h2 className="name">{user.displayName}</h2>
          <p className="email">{user.email}</p>

          <div className="stats">
            <div className="chip">💬 Chats Active</div>
            <div className="chip">⚡ Real-time</div>
            <div className="chip">🔒 Secure</div>
          </div>

          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Profile;