import React, { createContext, useEffect, useState } from "react";
import { all_product, allProductsData } from "../data/data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  // Cart state to store products in the cart
  const [cart, setCart] = useState({});

  // Function to add a product to the cart
  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart[productId];

      if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        return {
          ...prevCart,
          [productId]: {
            ...existingProduct,
            quantity: existingProduct.quantity + 1,
          },
        };
      } else {
        // If the product is not in the cart, add it with quantity 1
        const product = allProductsData.find((el) => el.id === productId);

        if (product) {
          return {
            ...prevCart,
            [productId]: {
              ...product,
              quantity: 1,
            },
          };
        } else {
          return prevCart; // Return the previous cart state if the product is not found
        }
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const { [productId]: removed, ...rest } = prevCart;
      return rest;
    });
  };

  // Calculate the total price using the reduce method
  const calculateTotalPrice = () => {
    // return cart.reduce((total, item) => {
    //   return total + item.price * item.quantity;
    // }, 0);
    return 0;
  };

  useEffect(() => {
    console.log(cart);
    // console.log("Total Price: ", calculateTotalPrice());
  }, [cart]);

  const contextValue = {
    all_product,
    cart,
    addToCart,
    removeFromCart,
    calculateTotalPrice,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
