import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/ui/button';
import './cart.css'
import { cartShow, ordersShow } from '../store/actions/action';
import axios from 'axios';
import OrdersAll from '../components/OrdersAll';

const OrderList = () => {
    const dispatch = useDispatch();
    const [orderList, setOrderList] = useState([])

    const handlerShowItemList = () => {
        dispatch(cartShow(false))
        dispatch(ordersShow(false))
    }

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
                {orderList.reverse().map((item:any) => <OrdersAll data={item} key = {uuidv4()}/>)}
                {/* <div className="total-amount price-text">Total amount: {totalCart}$</div> */}
                <div className="cart-button">
                <Button className="btn-return" title="Вернуться в каталог" onPress={handlerShowItemList}/>
                </div>
            </div>
        </div>
    )
}

export default OrderList

