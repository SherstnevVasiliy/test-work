import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import ItemCard from '../components/ItemCard'

const ItemList = () => {
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        const getItem = async () => {
          try {
            const response = await axios.get('http://localhost:3000/items');
            setItemList(response.data);
            console.log(response.data)
          } catch (err) {
            alert(err);
          }
        };
        getItem();
      }, []);

    return (
        <div className="wrapper">
            {itemList.map(items => <ItemCard data={items} key = {uuidv4()}/>)}
        </div>
    )
}

export default ItemList