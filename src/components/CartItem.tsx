import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ICart } from './interface'
import './itemCard.css'
import Button from './ui/button'
import { setCountCart } from '../store/actions/action'
import { getCart, minusClick, plusClick } from '../components/functions/function'


const CartItem = ({ data }:any) => {
    console.log('=======', data)
    const [totalCost, setTotalCost] = useState(Math.floor(data.price * data.count * 100) / 100)
    const dispatch = useDispatch();
    console.log('render')
    const [buyCount, setBuyCount] = useState(0)
    let cart = getCart().filter((item:any) => item.id === data.id)

    return (
        <div className="cart-item-wrap">
            <div className="item-wrap">
                <div className="cart-text">
                    <div className="item-title-category">
                        <div className="item-title">
                            {data.title}
                        </div>
                    </div>
                    <div className="item-total">
                        Доступно на складе: {cart[0]?
                        ((data.total - cart[0].count) > 15? "Много" : (data.total - cart[0].count))
                        :
                        ((data.total - buyCount) > 15? "Много" : (data.total - buyCount))}
                    </div>
                </div>
            </div>
            <div className="cart-price-wrap">
                <div className="item-price">
                    {data.price}$
                </div>
                <div className="item-price-button">
                    <Button className="plus-minus-btn" title="◀" onPress={() => minusClick(
                        setBuyCount,
                        setTotalCost,
                        dispatch,
                        setCountCart,
                        buyCount,
                        cart,
                        data,
                    )}/>
                    <p>{cart[0]? cart[0].count : buyCount}</p>
                    <Button className="plus-minus-btn" title="▶" onPress={() => plusClick(
                        setBuyCount,
                        setTotalCost,
                        dispatch,
                        setCountCart,
                        buyCount,
                        cart,
                        data,
                    )}/>
                </div>
                <div className="item-price total">
                    {totalCost}$
                </div>
            </div>
        </div>
    )
}

export default CartItem