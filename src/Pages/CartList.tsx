import React from 'react'
import Cart from '../components/Cart';
import { getCart } from '../components/functions/function'

const CartList = () => {
    console.log('CART', getCart())
    const data = getCart()
    return (
        <Cart data={data}/>
    )
}

export default CartList