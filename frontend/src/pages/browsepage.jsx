import React from "react";

export default function BrowsePage() {
  // Dummy users list for demo
  const users = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 32 },
  ];

  return (
    <div>
      <h2>Browse Profiles</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>
            {user.name}, {user.age}
          </p>
        </div>
      ))}
    </div>
  );
}
