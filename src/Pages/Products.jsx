import React, { useReducer, useState } from "react";
import Header from "../Components/Header";
import { db } from "../Database/db";
import { Link } from "react-router-dom";
const Products = () => {

  const [card, setCard] = useState(db);
  // console.log(card);
  function convertToSlug(text) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
  return (
    <div>
      <Header></Header>
      
      {card?.map((item, index) => {
        const slug = convertToSlug(item.title)
        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
          <Link to={`/products/${slug}`}>
            <img src={item.image} className="card-img-top" alt="Burger Images" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {item.category}
              </p>
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
