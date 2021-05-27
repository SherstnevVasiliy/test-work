import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ICard, ICart } from './interface'
import './itemCard.css'
import Button from './ui/button'
import { setCountCart } from '../store/actions/action'
import { getCart, minusClick, plusClick } from '../components/functions/function'


const CartItem = ({ data }:ICard) => {
    const dispatch = useDispatch();
    const [totalCost, setTotalCost] = useState(Math.floor(data.price * data.count * 100) / 100)
    const [buyCount, setBuyCount] = useState(0)
    let cart = getCart().filter((item:ICart) => item.id === data.id)
    return (
        <div className="cart-item-wrap">
            <div className="cart-text">
                <div className="price-text">
                    {data.title}
                </div>
                <div className="item-total">
                    Доступно на складе: {cart[0]?
                    ((data.total - cart[0].count) > 15? "Много" : (data.total - cart[0].count))
                    :
                    ((data.total - buyCount) > 15? "Много" : (data.total - buyCount))}
                </div>
            </div>
            <div className="cart-price-wrap">
                <div className="price price-text">
                    {data.price}$
                </div>
                <div className="cart-price-button">
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
                <div className="price price-text">
                    {cart[0]? Math.floor(cart[0].price * cart[0].count * 100) / 100 : totalCost}$
                </div>
            </div>
        </div>
    )
}

export default CartItem