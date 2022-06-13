import React from 'react'
import "./CheckOut.css"
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider"
import CheckOutProduct from './CheckOutProduct'

function CheckOut() {
    const [{ cart, user }] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_add' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt='' />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'>
                        Your Cart
                    </h2>
                    {cart.map(item => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />

                    ))}
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )


}

export default CheckOut