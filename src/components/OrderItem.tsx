import React from 'react'
import './orders.css'

const OrderItem = ({ data }:any) => {

    return (
        <div className="order-item-wrap">
            <div className="order-text">
                <div className="price-text">
                    {data.title}
                </div>
                <div className="price price-text">
                    {data.price}$
                </div>
                <div className="price price-text">
                    {data.count}шт
                </div>
                <div className="price price-text">
                    {data.count * data.price}$
                </div>
            </div>
        </div>
    )
}

export default OrderItem