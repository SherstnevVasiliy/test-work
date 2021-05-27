import React from 'react'
import Button from './ui/button'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { IInitial } from './interface'
import { cartShow, ordersShow } from '../store/actions/action'

const Header = () => {
    const isCartShow = useSelector((state: IInitial) => state.isCartShow)
    const dispatch = useDispatch()

    const handlerShowCart = () => {
        dispatch(cartShow(true))
    }

    const handlerShowItemList = () => {
        dispatch(cartShow(false))
        dispatch(ordersShow(false))
    }

    const countCart = useSelector((state: IInitial) => state.countCart)

    const blockCart = () => {
        return (
            <>
                <Button className="cart-title" title="" onPress={handlerShowCart}/>
                {countCart? <div className="cart-count">{countCart}</div>
                :
                <div className="cart-count hide">{countCart}</div>}
            </>
        )
    }

    const blockReturn = () => {
        return (
            <Button className="btn-return" title="Вернуться в каталог" onPress={handlerShowItemList}/>
        )
    }

    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    {!isCartShow? blockCart() : blockReturn()}
                </div>
            </div>
        </header>
    )
}

export default Header