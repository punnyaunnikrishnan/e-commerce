import React, { useEffect, useState } from "react";
import CheckOutProduct from "./CheckOutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
// import { useElements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./Reducer";
// import axios from "axios";

function Payment() {
  const navigate = useNavigate();
  const [{ cart, user }, dispatch] = useStateValue();

  // const stripe = useStripe();
  // const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setprocessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  // useEffect(() => {
  //whenever the basket changes it updates the stripe secret which allows to charge a customer

  //generates special stripe secret to charge a customer
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       //stripe expects total in rupees
  //       url: `/payments/create?total=${getCartTotal(cart)}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [cart]);

  const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setprocessing(true);

  //   const payload = await stripe
  //     .confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     })
  //     .then(({ paymentIntent }) => {
  //       //paymentintent=payment confirmtn
  //       setSucceeded(true);
  //       setError(null);
  //       setprocessing(false);

  //       dispatch({
  //         type: "EMPTY_CART",
  //       });

  //       navigate("/orders");
  //     });
  };

  const handleChange = (event) => {
   
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          {" "}
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        {/* payment section-delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
        </div>
        <div className="payment_address">
          <p>{user?.email}</p>

          <p>india</p>
          <p>kerala</p>
        </div>

        {/* payment section-review item */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items And Delivery</h3>
          </div>
          <div className="payment_items">
            {/* products in my basket */}
            {cart.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section - payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* strip magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total :{value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>

             
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;