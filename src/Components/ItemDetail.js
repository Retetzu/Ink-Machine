import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

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
          <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				
			</div>
			<div class="photo-album">
			</div>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
      <ul>
				<li><img src={item.pictureURL} alt=""></img></li>
			</ul>
			<h1>{item.title}</h1>
		</div>
		<div class="price">
			<h3> $ {item.price}</h3>
		</div>
		<div class="description">
			<p>{item.description}</p>
		</div>
	</div>
</section>
          {show ? (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          ) :
              <Link to={"/cart"} class="buy--btn"> Buy Now
              </Link>
                }
        </div>
      )}
    </>
  );
}
