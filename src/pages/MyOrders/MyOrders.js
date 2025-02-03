import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const MyOrders = () => {
    const url = "http://localhost:3000";
    const { token} = useContext(StoreContext)
    const [data, setData] = useState([]);

    const fetchOrders = async ()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
        
    }

useEffect(()=>{
    if(token){
        fetchOrders();
    }
}, [token])

  return (
    <div className='my-orders'>
        <h2>My orders</h2>
        <div className='container'>
            {data.map((order,index)=>{
                return (
                    <div key={index} className="my-order-order">
                        <img src='assets.parcel_icon'alt=''/>
                        <p>{order.items.map((item, index)=>{
                            if (index === order.items.length-1){
                                return item.name+ "x" + item.quantity
                            }
                            else{
                                return item.name+ "x" + item.quantity+", "
                            }
                        })}</p>
                    </div>
                )
            })}
        </div>
  
    </div>
  )
}

export default MyOrders
