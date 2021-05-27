import React from 'react'

const OrderItem = (props:any) => {
    const { data } = props
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