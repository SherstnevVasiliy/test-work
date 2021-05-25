import React from 'react'
import Button from './ui/button'
import './header.css'
import { useSelector } from 'react-redux'
import { IInitial } from './interface'

const Header = () => {

    const countCart = useSelector((state: IInitial) => state.countCart)
    console.log(countCart)

    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    <Button className="cart-title" title="" onPress={() => console.log('PRESS CART')}/>
                    {countCart? <div className="cart-count">{countCart}</div>
                    :
                    <div className="cart-count hide">{countCart}</div>}
                </div>
            </div>
        </header>
    )
}

export default Header