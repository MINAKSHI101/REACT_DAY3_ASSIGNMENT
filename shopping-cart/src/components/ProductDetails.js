import React from "react";
import data from "./product.json";

function ProductDetails() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 16 }}>
      <h2>Product Details</h2>
      <div style={{ display: "flex", gap: 16 }}>
        <img
          src={data.image}
          alt={data.title}
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <p>
            <strong>${data.price}</strong>
          </p>
          <p>
            Rating: {data.rating.rate} ★ ({data.rating.count} reviews)
          </p>
          <button
            style={{
              padding: "8px 12px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
