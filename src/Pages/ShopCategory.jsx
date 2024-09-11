import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>{" "}
      <div className="loadmore">Explore More</div>{" "}
    </>
  );
};
export default ShopCategory;
