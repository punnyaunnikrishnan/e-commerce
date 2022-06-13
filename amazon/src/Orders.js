import React from 'react'
import "./Orders.css"
import CheckOutProduct from './CheckOutProduct'
import {useStateValue} from "./StateProvider"
function Orders() {

    const [{cart,user},dispatch]=useStateValue();
  return (
    <div className='orders'>
        <h1>your orders
        {cart.map(item => (
                <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>
               
            ))}
        </h1>
        </div>
  )
}

export default Orders