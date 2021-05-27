import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './cart.css'
import './orders.css'
import axios from 'axios';
import OrdersAll from '../components/OrdersAll';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        const getOrder = async () => {
          try {
            const response = await axios.get('http://localhost:3000/orders');
            setOrderList(response.data);
          } catch (err) {
            alert(err);
          }
        };
        getOrder();
      }, []);


    
    return (
        <div className="wrapper">
            <div className="cart-wrap">
                <div className="price-text order-history">ИСТОРИЯ ЗАКАЗОВ</div>
                {orderList.reverse().map((item:any) => <OrdersAll data={item} key = {uuidv4()}/>)}
            </div>
        </div>
    )
}

export default OrderList

