import React, { useState } from "react";
import users from "./users.json";

function UserDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 16 }}>
      <h2>User Management Dashboard</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16 }}>
        {/* User List */}
        <div>
          <h3>Users</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((u) => (
              <li key={u.id}>
                <button
                  onClick={() => setSelectedUser(u)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#2563eb",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "6px 0"
                  }}
                >
                  {u.name} – {u.email} – {u.phone}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* User Details */}
        <div>
          {selectedUser ? (
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 12,
                background: "#fafafa"
              }}
            >
              <h3>{selectedUser.name}</h3>
              <p>Email: {selectedUser.email}</p>
              <p>Phone: {selectedUser.phone}</p>
              <p>Username: {selectedUser.username}</p>
              <p>Company: {selectedUser.company.name}</p>
              <p>
                Address: {selectedUser.address.suite}, {selectedUser.address.street},{" "}
                {selectedUser.address.city}
              </p>
              <p>Website: {selectedUser.website}</p>
            </div>
          ) : (
            <p>Select a user to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
