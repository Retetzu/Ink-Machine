import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

export default function Cart() {
    let {cart, cartVoid, deleteProduct} = useContext(CartContext)

    const deleteFromCart = (index) => {
        deleteProduct(index)
    }

    if(cart.length === 0) {
        return(<>
              <p> No hay nada en el carrito </p>
                <Link to={"/productos"} > Cart </Link>
               </>
            )
    }
    else {
        return(<>
                {cart.map((item, index) => {
                    return  <div key={item.id} className='container'>
                            <div className='card'>
                                <div className='img'>
                                  <img src={item.pictureURL} alt="" />
                                </div>
                                <div className='content'>
                                  <div className='productName'> {item.title} </div>
                                </div>
                                
                                <p> Quantity: {item.quantity} </p>
                                <div className='price'> $ {item.finalValue} </div>
                                <p  onClick={() => {deleteFromCart(index)}}></p>
                                <button onClick={cartVoid}> Delete Cart </button> 
                            </div>
                            </div>
                })}
    
                
                </>
            )
        }
    }
