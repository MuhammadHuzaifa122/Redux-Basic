import React from "react";
import productsList from "./store/productsList";
import Product from "./components/Product";
import { store } from "./store/index.js";
import "./App.css";
export default function App() {
  console.log(store);

  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}
