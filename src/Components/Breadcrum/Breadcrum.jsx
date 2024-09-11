import React from "react";
import { product } from "../../data/data";

export default function Breadcrum(props) {
  return (
    <div className="breadcrum">
      {product.category} {product.name}
    </div>
  );
}
