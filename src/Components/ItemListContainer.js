import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer({ greetings }) {
  
  return <>
      <div> {alert(greetings)} </div>
      <ItemCount stock={5} initial={1} />
  </>
}
