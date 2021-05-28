import React from 'react'
import OrderItem from './OrderItem'
import { v4 as uuidv4 } from 'uuid';
import { IOrder, IOrders } from './interface';

const OrdersAll = ( props:IOrders) => {
    const { data } = props
    
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
                    Email: {data.email}
                </div>
                <div className="price-text">
                    Телефон: {data.phone}
                </div>
                <div className="price-text order-content">
                    {data.order.map((orderItem: IOrder) => <OrderItem data={orderItem} key = {uuidv4()}/>)}
                </div>
                <div className="price-text order-total">
                    Total: {Math.floor(data.order.reduce((summ:number, orderItem: IOrder) => summ + orderItem.count*orderItem.price, 0) * 100) / 100}$
                </div>
            </div>
        </div>
    )
}

export default OrdersAll