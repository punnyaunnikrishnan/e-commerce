import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const navigate = useNavigate();

  const [{ cart }, dispatch] = useStateValue();
  console.log('this is the cart>>>',cart)
  const addToCart = () => {
    //dispatches item to data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={(e) => navigate("/payment")}>Buy Now</button>
    </div>
  );
}

export default Product;