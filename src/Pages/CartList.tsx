import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/ui/button';
import './cart.css'
import CartItem from '../components/CartItem';
import { getCart, getCountCart, getCountTotal, setOrder } from '../components/functions/function';
import { IInitial } from '../components/interface';
import { setCountCart } from '../store/actions/action';

const CartList = () => {
    const dispatch = useDispatch()
    const [cartItems, setCarItems] = useState(getCart())
    const totalCart = useSelector((state: IInitial) => state.totalCart)

    const onClear = () => {
        localStorage.setItem('cart', '[]')
        setCarItems(getCart())
        dispatch(setCountCart(getCountCart(), getCountTotal()))
    }

    const updateDb = async (newItems:{id:number, title:string, price:number, description:string, image:string, category:string, total:number, count:number}) => {

        try {
            await fetch(`http://localhost:3000/items/${newItems.id}`, {
                method: 'PUT',
                body:JSON.stringify(
                    {
                        id: newItems.id,
                        title: newItems.title,
                        price: newItems.price,
                        description: newItems.description,
                        image: newItems.image,
                        category: newItems.category,
                        total: newItems.total - newItems.count
                    }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        } catch (e) {
            console.log(e)
        }
    }

    const onUpdate = async () => {
        try {
            getCart().map((
                newItems:{
                    id:number,
                    title:string,
                    price:number,
                    description:string,
                    image:string,
                    category:string,
                    total:number, count:number
                }) => updateDb(newItems))
            console.log('KORZINA', getCart())    
            setOrder(getCart())
            onClear()
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <div className="wrapper">
            <div className="cart-wrap">
                {cartItems.map((item:any) => <CartItem data={item} key = {uuidv4()}/>)}
                <div className="total-amount price-text">Total amount: {totalCart}$</div>
                <div className="cart-button">
                    <Button className="btn-cart" title="Очистить корзину" onPress={onClear}/>
                    <Button className="btn-cart" title="Оформить заказ" onPress={onUpdate}/>
                </div>
            </div>
        </div>
    )
}

export default CartList

