import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './cart.css'
import axios from 'axios';
import OrdersAll from '../components/OrdersAll';

const OrderList = () => {
    const dispatch = useDispatch();
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
      }, [dispatch]);


    
    return (
        <div className="wrapper">
            <div className="cart-wrap">
                <div className="price-text">История заказов</div>
                {orderList.reverse().map((item:any) => <OrdersAll data={item} key = {uuidv4()}/>)}
            </div>
        </div>
    )
}

export default OrderList

