import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const OrderCard = (props) => {
  const order = props.order;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='Orders'
        height={300}
      />
      <div className='desc'>
        <h2>
          Product : <Link to={`/show-order/${order._id}`}>{order.title}</Link>
        </h2>
        <h3>Quantity Available : {order.quantity}</h3>
        <p>Purchase Required : {order.purchase}</p>
      </div>
    </div>
  );
};

export default OrderCard;