import React from 'react'
import './Style/ItemDetail.css'

export default function ItemDetail({ item }) {
  return (
    <>
      {item.pictureURL && (
          <div className='container'>
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
       </div>
      )}
    </>
  )
}
