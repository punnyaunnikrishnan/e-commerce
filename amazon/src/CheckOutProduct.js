import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, image, title, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        //removing item from basket
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        });
    };

    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_image" src={image} />
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {Array(rating)
                        .fill()
                        .map(
                            (
                                _,
                                i //creates an array and fill it with a numbr
                            ) => (
                                <p>🌟</p>
                            )
                        )}
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    );
}

export default CheckOutProduct;