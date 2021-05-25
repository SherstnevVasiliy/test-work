import React, { useState, useEffect } from 'react'
import Button from './ui/button'
import './header.css'

const Header = () => {

    const [cartCount, setCartCount] = useState(0)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    console.log(cart)
    const cartValue = cart.reduce((summ:number, item:any) => summ + item.count, 0)

    useEffect (() => {
        setCartCount(cartValue)
    }, [cartValue])



    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    <p className="cart-title">Корзина</p>
                    <div className="cart-count">{cartCount}</div>
                </div>
            </div>
        </header>
    )
}

export default Header