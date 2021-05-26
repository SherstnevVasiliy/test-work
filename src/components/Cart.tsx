import React from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/ui/button';
import './cart.css'
import CartItem from './CartItem';
import { IInitial } from './interface';

const Cart = ({data}:any) => {
    const totalCart = useSelector((state: IInitial) => state.totalCart)
    console.log('DATACART',data)

    const onClear = () => {
        localStorage.setItem('cart', '[]')
    }

    return (
        <>
        <div className="wrapper">
            {data.map((item:any) => <CartItem data={item} key = {uuidv4()}/>)}
        </div>
        <div className="wrapper">
            <div>{totalCart}</div>
            <div className="cart">
                <Button className="btn-cart" title="Очистить корзину" onPress={onClear}/>
            </div>
        </div>
        
        </>
    )
}

export default Cart

