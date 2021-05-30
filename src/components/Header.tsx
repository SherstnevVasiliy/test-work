import React from 'react'
import Button from './ui/button'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { IInitial } from './interface'
import { cartShow, ordersShow } from '../store/actions/action'

const Header = () => {
    const countCart = useSelector((state: IInitial) => state.countCart)
    const isCartShow = useSelector((state: IInitial) => state.isCartShow)
    const isOrdersShow = useSelector((state: IInitial) => state.isOrdersShow)


    const dispatch = useDispatch()

    const handlerShowCart = () => {
        dispatch(cartShow(true))
        dispatch(ordersShow(false))
    }

    const handlerShowItemList = () => {
        dispatch(cartShow(false))
        dispatch(ordersShow(false))
    }

    const handlerShowOrdersList = () => {
        dispatch(cartShow(false))
        dispatch(ordersShow(true))
    }

    

    const inCart = () => {
        return (
            <>
                <Button className="btn-return" title="История заказов" onPress={handlerShowOrdersList}/>
                <Button className="btn-return" title="Вернуться в каталог" onPress={handlerShowItemList}/>
            </>
        )
    }

    const inCatalog = () => {
        return (
            <>
                <Button className="btn-return" title="История заказов" onPress={handlerShowOrdersList}/>
                <Button className="cart-title" title="" onPress={handlerShowCart}/>
                {countCart? <div className="cart-count" onClick={handlerShowCart}>{countCart}</div>
                :
                <div className="cart-count hide">{countCart}</div>}
            </>
        )
    }

    const inOrders = () => {
        return (
            <>
                <Button className="btn-return" title="Вернуться в каталог" onPress={handlerShowItemList}/>
                <Button className="cart-title" title="" onPress={handlerShowCart}/>
                {countCart? <div className="cart-count" onClick={handlerShowCart}>{countCart}</div>
                :
                <div className="cart-count hide">{countCart}</div>}
            </>
        )
    }

    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    {isCartShow === false && isOrdersShow === false ? inCatalog() : null}
                    {isCartShow === true && isOrdersShow === false ? inCart() : null}
                    {isCartShow === false && isOrdersShow === true ? inOrders() : null}
                </div>
            </div>
        </header>
    )
}

export default Header