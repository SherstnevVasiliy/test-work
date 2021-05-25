import React from 'react'
import { ICard } from './interface'
import './itemCard.css'


const ItemCard = ({ data }:ICard) => {
    return (
        <div className="wrapper">
            <div className="card-wrap">
                <div className="item-wrap">
                    <div className="item-image">
                        <img alt="" src={data.image}/>
                    </div>
                    <div className="item-text">
                        <div className="item-title">
                            {data.title}
                        </div>
                        <div className="item-category">
                            Категория: {data.category}
                        </div>
                        <div className="item-description">
                            {data.description}
                        </div>
                        <div className="item-total">
                            Количество на складе: {data.total}
                        </div>
                    </div>
                </div>
                <div className="item-price">
                    {data.price}
                </div>
            </div>
        </div>
    )
}

export default ItemCard