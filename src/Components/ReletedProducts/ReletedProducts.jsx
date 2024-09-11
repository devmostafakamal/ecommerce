import React from "react";
import "./ReletedProducts.css";
import Item from "../Items/Item"; // Corrected import name from Items to Item
import { data_product } from "../../data/data";

export default function RelatedProducts() {
  // Corrected component name
  return (
    <div className="related-products">
      {" "}
      {/* Corrected class name */}
      <h1>Related Products</h1> {/* Corrected heading text */}
      <hr />
      <div className="related-products-items">
        {" "}
        {/* Corrected class name */}
        {data_product.map((item, i) => (
          <Item
            key={i} // Use the id as the key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}
