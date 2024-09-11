import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import ReletedProducts from "../Components/ReletedProducts/ReletedProducts";
import { all_product, data_product } from "../data/data";

export default function Product() {
  const { productId } = useParams();
  const product =
    [...all_product, ...data_product].filter((elm) => elm.id == productId)[0] ||
    all_product[0];

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <ReletedProducts />
    </div>
  );
}
