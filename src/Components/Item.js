import React from "react";
import { Link } from 'react-router-dom';
import './Style/Item.css'

export default function Item({ item }) {

  return ( <>
    <Link to={`/item/${item.id}`}>

    <div className="container">
      <div className="card">
          <img src={item.pictureURL} alt="tattoo"></img>
          <p> {item.title} </p>
          <p> $ {item.price} </p>
      </div>
    </div>

    </Link>
    </>
  );
}
