import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import ItemCard from '../components/ItemCard'
import { setItemsState } from '../store/actions/action'
import Button from '../components/ui/button';
import './cart.css'
import { getCart } from './functions/function'
import CartItem from './CartItem';

const Cart = ({data}:any) => {
    console.log('DATACART',data)

    const onClear = () => {
        localStorage.setItem('cart', '[]')
    }

    return (
        <>
        <div className="wrapper">
            {data.map((item:any) => <CartItem data={item}/>)}
        </div>
        <div className="wrapper">
            <div className="cart">
                <Button className="btn-cart" title="Очистить корзину" onPress={onClear}/>
            </div>
        </div>
        </>
    )
}

export default Cart