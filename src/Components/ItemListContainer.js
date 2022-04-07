import React, { useEffect, useState } from 'react'
import { products } from './Data/Data'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer() {

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
    setProduct(res)
  })
 })
  
  
  return <>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      <ItemList items={product}/>
  </>
}
