import React from 'react'
import OrderItem from './OrderItem'
import { v4 as uuidv4 } from 'uuid';

const OrdersAll = ({ data }:any) => {

    return (
        <div className="order-wrap">
            <div className="text">
                <div className="price-text">
                    Номер заказа: {data.id}
                </div>
                <div className="price-text">
                    Дата заказа: {data.orderData.toString().slice(0,10)}
                </div>
                <div className="price-text">
                    {data.order.map((orderItem: any) => <OrderItem data={orderItem} key = {uuidv4()}/>)}
                </div>
                <div className="price-text">
                    Total: {Math.floor(data.order.reduce((summ:number, orderItem: any) => summ + orderItem.count*orderItem.price, 0) * 100) / 100}$
                </div>
            </div>
        </div>
    )
}

export default OrdersAll