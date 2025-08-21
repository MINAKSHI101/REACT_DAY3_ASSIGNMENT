import React, { useState } from "react";
import posts from "./Posts.json";
import comments from "./comments.json";

function Posts() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 16 }}>
      <h2>Posts with Comments</h2>
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {posts.map((p) => (
          <li
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              background: "#fafafa"
            }}
          >
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p>{p.body}</p>
            <button
              onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
              style={{
                marginTop: 6,
                padding: "6px 10px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer"
              }}
            >
              {expandedId === p.id ? "Hide Comments" : "Show Comments"}
            </button>

            {expandedId === p.id && (
              <div style={{ marginTop: 10 }}>
                {(comments.filter((c) => c.postId === p.id) || []).map((c) => (
                  <div
                    key={c.id}
                    style={{
                      borderTop: "1px solid #eee",
                      paddingTop: 8,
                      marginTop: 8
                    }}
                  >
                    <strong>{c.email}</strong>
                    <p style={{ margin: "4px 0" }}>{c.body}</p>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
