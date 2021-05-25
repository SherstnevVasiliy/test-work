import React, { useState, useEffect } from 'react'
import { ICard } from './interface'
import './itemCard.css'
import Button from './ui/button'


const ItemCard = ({ data }:ICard) => {

    const [buyCount, setBuyCount] = useState(0)

    const handleClick = (id:number) => {
        console.log('PRESSED', id)
    }

    const minusClick = (id:number) => {
        let count = 0
        if ((buyCount) > 0) {
            count = buyCount - 1
            setBuyCount(count)
        }
        console.log('Total: ', count)
    }

    const plusClick = (id:number) => {
        let count = 0
        if ((buyCount) < data.total) {
            count = buyCount + 1
            setBuyCount(count)
        }
        console.log('Total: ', count)
    }

    useEffect(() => {

    }, [buyCount])

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
                                Количество на складе: {data.total}
                            </div>
                        </div>
                    </div>
                    <div className="item-price-wrap">
                        <div className="item-price">
                            {data.price}$
                        </div>
                        <div className="item-price-button">
                            <Button className="plus-minus-btn" title="◀" onPress={() => minusClick(data.id)}/>
                            <p>{buyCount}</p>
                            <Button className="plus-minus-btn" title="▶" onPress={() => plusClick(data.id)}/>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <Button className="detail-btn" title="Подробнее..." onPress={() => handleClick(data.id)}/>
                </div>
            </div>

        </div>
    )
}

export default ItemCard