import React from "react";
import { Button } from "react-bootstrap";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, logout } = UserAuth();
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
    <>
      <h1>Dashboard</h1>
      <h3>Email: {currentUser&&currentUser.displayName}</h3>
      <Button className="w-100" type="submit" onClick={handleLogOut}>
        Log out
      </Button>
    </>
  );
}
