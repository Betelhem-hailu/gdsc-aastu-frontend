import React, { useEffect, useState } from "react";
import "./products.css";

const Products = () => {
  const [isLoading, setLoading] = useState(true);
  const [isCompleted, setCompleted] = useState(false);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        setCompleted(true);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="content">
      <h3>Jewelery</h3>
      {isLoading === true ? "Loading" : ""}
      {isCompleted === true
        ? products.map((item) => (
              <div className="card" key={item.id}>
                <div className="card_img">
                  <img src={item.image} />
                </div>
                <div className="card_header">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                  <div className="btn">Add to cart</div>
                </div>
              </div>
          ))
        : ""}
    </div>
  );
};

export default Products;
