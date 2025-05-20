import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
