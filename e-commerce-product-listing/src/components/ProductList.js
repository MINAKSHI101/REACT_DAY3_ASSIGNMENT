import React from "react";
import data from "./product.json";

function ProductList() {
  return (
    <div style={{ padding: 16, fontFamily: "Arial, sans-serif" }}>
      <h2>Product Listing</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 12
        }}
      >
        {data.map((p) => (
          <article
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              background: "#fafafa"
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", height: 160, objectFit: "contain" }}
            />
            <h4 style={{ fontSize: 14, lineHeight: 1.3 }}>{p.title}</h4>
            <strong>${p.price}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
