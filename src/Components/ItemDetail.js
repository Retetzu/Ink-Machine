import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from './CartContext'
import './Style/ItemDetail.css'

export default function ItemDetail({ item }) {

    const {addProduct} = useContext(CartContext)
    const [show, setShow] = useState(true);

    const onAdd = (quantityToAdd) => {
       item.quantity = quantityToAdd;
       item.finalValue = item.price * item.quantity;
       item.agregado = true;
       addProduct(item)
       setShow(false);
    }
    
  return (
    <>
      {item.pictureURL && (
          <div key={item.id} className='container'>
          <div className='card'>
              <div className='img'>
                  <img src={item.pictureURL} alt='tattoo'></img>
              </div>
              <div className='content'>
                  <div className='productName'>
                      <h3> {item.title} </h3>
                  </div>
                 <div className='price'>
                      <h4> $ {item.price} </h4>
                  </div>
                  <div>
                      <p> {item.description} </p>
                  </div>
              </div>
          </div>
          {show ? (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to={"/cart"}> Finalizar </Link>
          )}
         
       </div>
      )}
      
    </>
 )
}
