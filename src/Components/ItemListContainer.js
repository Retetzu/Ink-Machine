import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Data/Data'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const {id} = useParams()
  const onAdd = (count) => {
   alert(`Agregaste ${count} items`)
  }
   const [product, setProduct] = useState([])
  
 useEffect(() => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
  promise.then((res) => {
    if(id)setProduct(res.filter(e => e.category === id));
     else {setProduct(res)}
  })
 })
  
  
  return <>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      <ItemList items={product}/>
  </>
}
