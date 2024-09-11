import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLatter from "../Components/NewsLetter/NewsLatter";
import { LoginSignup } from "./LoginSignup";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Cart from "./Cart";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLatter />
      <LoginSignup />
      <Cart />
    </div>
  );
};
