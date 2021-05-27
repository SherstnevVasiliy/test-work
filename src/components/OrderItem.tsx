import React from 'react'
import { ICard } from './interface'

const OrderItem = ({ data }:ICard) => {

    return (
        <div className="order-item-wrap">
            <div className="order-text">
                <div className="price-text order-title">
                    {data.title}
                </div>
                <div className="price price-text order-value">
                    {data.price}$
                </div>
                <div className="price price-text order-value">
                    {data.count}шт
                </div>
                <div className="price price-text order-value">
                    {data.count * data.price}$
                </div>
            </div>
        </div>
    )
}

export default OrderItem