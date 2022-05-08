import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Data/Data'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const {id} = useParams()
  
  const [product, setProduct] = useState([])
  
 useEffect(() => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, )
  })
  promise.then((res) => {
    if(id)setProduct(res.filter(e => e.category === id));
     else { setProduct(res) }
  })
 }, [id])
  
  
  return <>
      <ItemList items={product} key={product.id}/>
  </>
}
