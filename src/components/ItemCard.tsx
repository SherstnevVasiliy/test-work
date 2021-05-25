import React from 'react'
import { ICard } from './interface'
import './itemCard.css'
import Button from './ui/button'


const ItemCard = ({ data }:ICard) => {

    const handleClick = (id:number) => {
        console.log('PRESSED', id)
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
                                Количество на складе: {data.total}
                            </div>
                        </div>
                    </div>
                    <div className="item-price">
                        {data.price}$
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