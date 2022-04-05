import React, { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd}) {
    let [counter, setInitial] = useState(initial)
        
  const sumar = () => {
    if(counter !== stock) return setInitial(counter + 1)
  }

  const restar = () => {
    if(counter !== initial) return setInitial(counter - 1)
  }

  return (
    <div>
        <div>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" onClick={restar} className="btn btn-outline-primary">Restar</button>
            <div className="btn btn-outline-primary"> {counter} </div>
            <button onClick={sumar} type="button" className="btn btn-outline-primary">Sumar</button>
          </div>
        </div>
          <button type="button" className="btn btn-primary">Agregar</button>
    </div>
  )
}
