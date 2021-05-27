import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import ItemCard from '../components/ItemCard'
import { setItemsState } from '../store/actions/action'
import { ICart } from '../components/interface';
import Modal from '../components/Modal';

const ItemList = () => {
    const dispatch = useDispatch();
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        const getItem = async () => {
          try {
            const response = await axios.get('http://localhost:3000/items');
            setItemList(response.data);
            dispatch(setItemsState(response.data))            
          } catch (err) {
            alert(err);
          }
        };
        getItem();
      }, [dispatch]);

    return (
        <div className="wrapper">
            {itemList.filter((items:ICart) => items.total !== 0).map(items => <ItemCard data={items} key = {uuidv4()}/>)}
            <Modal />
        </div>
    )
}

export default ItemList