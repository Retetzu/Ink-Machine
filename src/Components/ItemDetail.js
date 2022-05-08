import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import "./Style/ItemDetail.css";

export default function ItemDetail({ item }) {
  const { addProduct } = useContext(CartContext);
  const [show, setShow] = useState(true);

  const onAdd = (quantityToAdd) => {
    item.quantity = quantityToAdd;
    item.finalValue = item.price * item.quantity;
    item.agregado = true;
    addProduct(item);
    setShow(false);
  };

  return (
    <>
      {item.pictureURL && (
        <div key={item.id}>
          <div id='card'>
             <img src={item.pictureURL} alt=""></img>
            <div id='wrap'>
              <div id='description'>
               <p> {item.description} </p>
             </div>
             <div>
               <h2> {item.title} </h2>
             </div>
             <div>
               <h4> $ {item.price} </h4>
             </div>
             {show ? (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to={"/cart"} id="buy--btn">
              {" "}
              Buy Now
            </Link>
          )}
            </div>
          </div>  

          
        </div>
      )}
    </>
  );
}
