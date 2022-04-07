import React from "react";

export default function Item({ item }) {

  return (
    <div>
      <div
        className="card"
        style={{ height: "150px", width: "100px", margin: "10px" }}
      >
        <img src={item.pictureURL} alt="tattoo" className="card-img-top"></img>
        <div className="card-body">
          <p style={{ fontSize: "10px" }} className="card-text">
            {item.title}
          </p>
          <p style={{ fontSize: "10px" }} className="card-text">
            $ {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}
