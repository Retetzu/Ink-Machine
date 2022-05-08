import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

export default function Cart({ item }) {
    const {cart, cartVoid, deleteProduct} = useContext(CartContext)

    if(cart.length === 0) {
        return(<>
              <h4> No hay nada en el carrito </h4>
                <Link to={"/"} > Products </Link>
               </>
            )
    }
    else {
        return(<>
                {cart.map((item, index) => {
                    return <div key={item.id} className='container'>
                            <div className='card'>
                                <div className='img'>
                                  <img src={item.pictureURL} alt="" />
                                </div>
                                <div className='content'>
                                  <div className='productName'> {item.title} </div>
                                </div>
                                
                                  <p> Quantity: {item.amount} </p>
                                 <div className='price'> $ {item.finalValue} </div>
                                <button onClick={() => deleteProduct(item)}> Delete Product </button> 
                            </div>
                        </div>
                      
                })}
    
                
                </>
            )
        }
    }
