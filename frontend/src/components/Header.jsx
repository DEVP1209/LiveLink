import React from "react";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { currentUser,logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="header-container">
      <span className="username-text">{currentUser.displayName}</span>
      <span className="header-text">LiveLink</span>
      <button className="logout-btn" onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default Header;
