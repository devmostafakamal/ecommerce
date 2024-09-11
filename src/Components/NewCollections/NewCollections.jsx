import React from "react";
import "./NewCollections.css";
import { product } from "../../data/data";
import Items from "../Items/Item";
export default function NewCollections() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {product.map((item, i) => (
          <Items
            key={i}
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
