import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import ItemCard from '../components/ItemCard'
import { setItemsState } from '../store/actions/action'
import Button from '../components/ui/button';
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