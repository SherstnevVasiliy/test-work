import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './ui/button'
import './header.css'
import { IInitial } from './interface'
import { cartShow, ordersShow } from '../store/actions/action'

const FixedCart = () => {
    const dispatch = useDispatch()

    const countCart = useSelector((state: IInitial) => state.countCart)

    const handlerShowCart = () => {
        dispatch(cartShow(true))
        dispatch(ordersShow(false))
    }

    return (
        <div className="fixed-cart">
            <Button className="cart-title" title="" onPress={handlerShowCart}/>
            {countCart? <div className="cart-count">{countCart}</div>
            :
            <div className="cart-count hide">{countCart}</div>}
        </div>
    )
}

export default FixedCart