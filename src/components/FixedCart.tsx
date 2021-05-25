import React from 'react'
import Button from './ui/button'
import './header.css'
import { useSelector } from 'react-redux'
import { IInitial } from './interface'

const FixedCart = () => {

    const countCart = useSelector((state: IInitial) => state.countCart)
    console.log(countCart)

    return (
        <div className="fixed-cart">
            <Button className="cart-title" title="" onPress={() => console.log('PRESS CART')}/>
            {countCart? <div className="cart-count">{countCart}</div>
            :
            <div className="cart-count hide">{countCart}</div>}
        </div>
    )
}

export default FixedCart