import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ICard } from './interface'
import './itemCard.css'
import Button from './ui/button'
import { setCountCart } from '../store/actions/action'
import { getCountCart } from '../components/functions/function'


const CartItem = ({ data }:any) => {
    const dispatch = useDispatch();
    console.log('render')
    const [buyCount, setBuyCount] = useState(0)
    let cart = JSON.parse(localStorage.getItem('cart') || '[]').filter((item:any) => item.id === data.id)


    const minusClick = (id:number, title:string) => {
        let newCart = JSON.parse(localStorage.getItem('cart') || '[]')
        let count = cart[0]? cart[0].count : buyCount 
        if ((count) > 0) {
            count --
            setBuyCount(count)
            if (newCart.filter((item:any) => item.id === data.id)[0] && count > 0) {
                newCart.filter((item:any) => item.id === data.id)[0].count = count
            } else if (newCart.filter((item:any) => item.id === data.id)[0] && count === 0) {
                newCart = newCart.filter((item:any) => item.id !== data.id)
            }
            localStorage.setItem("cart", JSON.stringify(newCart))
            dispatch(setCountCart(getCountCart()))
        }
    }

    const plusClick = (id:number, title:string) => {
        const newCart = JSON.parse(localStorage.getItem('cart') || '[]')
        let count = cart[0]? cart[0].count : buyCount 
        if ((count) < data.total) {
            count ++
            setBuyCount(count)
            if (newCart.filter((item:any) => item.id === data.id)[0]) {
                newCart.filter((item:any) => item.id === data.id)[0].count = count
            } else {
                newCart.push({
                    id,
                    title,
                    count
                })
            }
            localStorage.setItem("cart", JSON.stringify(newCart))
            dispatch(setCountCart(getCountCart()))
        }
    }

    return (
        <div className="wrapper">
            <div className="card-wrap-content">
                <div className="card-wrap">
                    <div className="item-wrap">
                        <div className="item-text">
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
                    <div className="item-price-wrap">
                        <div className="item-price">
                            {data.price}$
                        </div>
                        <div className="item-price-button">
                            <Button className="plus-minus-btn" title="◀" onPress={() => minusClick(data.id, data.title)}/>
                            <p>{cart[0]? cart[0].count : buyCount}</p>
                            <Button className="plus-minus-btn" title="▶" onPress={() => plusClick(data.id, data.title)}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem