import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ICard, ICart } from './interface'
import './itemCard.css'
import Button from './ui/button'
import { openModal, setCountCart } from '../store/actions/action'
import { getCart, minusClick, plusClick } from '../components/functions/function'

const ItemCard = ({ data }:ICard) => {
    const dispatch = useDispatch();
    const [buyCount, setBuyCount] = useState(0)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [totalCost, setTotalCost] = useState(data.price * data.total)
    let cart = getCart().filter((item:ICart) => item.id === data.id)

    const openModalHandler = () => {
        dispatch(openModal(true, cart[0]? cart[0] : data))
    }

    return (
        <div className="wrapper">
            <div className="card-wrap-content">
                <div className="card-wrap">
                    <div className="item-wrap">
                        <div className="item-image">
                            <img alt="" src={data.image}/>
                        </div>
                        <div className="item-text">
                            <div className="item-title-category">
                                <div className="item-title">
                                    {data.title}
                                </div>
                                <div className="item-category">
                                    Категория: {data.category}
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
                            <Button className="plus-minus-btn" title="◀" onPress={() => minusClick(
                                setBuyCount,
                                setTotalCost,
                                dispatch,
                                setCountCart,
                                buyCount,
                                cart,
                                data
                                )}/>
                            <p>{cart[0]? cart[0].count : buyCount}</p>
                            <Button className="plus-minus-btn" title="▶" onPress={() => plusClick(
                                setBuyCount,
                                setTotalCost,
                                dispatch,
                                setCountCart,
                                buyCount,
                                cart,
                                data
                            )}/>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <Button className="detail-btn" title="Подробнее..." onPress={openModalHandler}/>
                </div>
            </div>

        </div>
    )
}

export default ItemCard