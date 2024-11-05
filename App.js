import React from "react";
import Product from "./components/Product";
import "./App.css";
import { useSelector } from "react-redux";
export default function App() {
  //Use Selector is used to get the data from the store and comes in react redux
  const productsList = useSelector((state) => state.products);

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
