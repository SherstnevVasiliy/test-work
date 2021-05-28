import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/ui/button';
import './cart.css'
import CartItem from '../components/CartItem';
import { getCart, getCountCart, getCountTotal, isEmail, isPhone, setOrder } from '../components/functions/function';
import { ICart, IInitial } from '../components/interface';
import { cartShow, ordersShow, setCountCart } from '../store/actions/action';
import Input from '../components/ui/input';

const CartList = () => {
    const dispatch = useDispatch()
    const [cartItems, setCarItems] = useState(getCart())
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
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
        if (email === '' || phone === '') {
            return alert('Поля Email и Телефон не должны быть пустыми')
        }

        if (!isEmail(email)) {
            return alert('Введите корректный Email')
        }
        
        if (!isPhone(phone.toString())) {
            return alert('Введите корректный Телефон')
        }

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
            setOrder(getCart(), email, phone.toString())
            onClear()
            alert("Заказ успешно оформлен")
            dispatch(ordersShow(true))
            dispatch(cartShow(false))
        } catch (e) {
            console.log(e)
        }
    }
    
    const cartButtons = () => {
        return (
            <div className="cart-wrap">
                {cartItems.map((item:ICart) => <CartItem data={item} key = {uuidv4()}/>)}
                <div className="total-amount price-text">Total amount: {totalCart}$</div>
                <div className="cart-button">
                <div className="registr-user-name">
                    <Input
                        value = {email}
                        setValue = {setEmail}
                        type = 'email'
                        className="input"
                        placeholder="Email..."
                    />
                </div>
                <div className="registr-pass">
                    <Input 
                        value = {phone}
                        setValue = {setPhone}
                        type = 'text'
                        className="input" 
                        placeholder="Телефон..."
                />
                </div>
                    <Button className="btn-cart" title="Оформить заказ" onPress={onUpdate}/>
                    <Button className="btn-cart" title="Очистить корзину" onPress={onClear}/>
                </div>
            </div>
        )
    }

    const nullCart = () => {
        return (
            <div className="cart-wrap null-cart-wrap">
                <div className="price-text">КОРЗИНА ПУСТАЯ</div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            {cartItems.length? cartButtons() : nullCart()}
        </div>
    )
}

export default CartList

