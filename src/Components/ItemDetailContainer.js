import React, { useEffect, useState } from "react";
import { products } from "./Data/Data";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 4000);
    });
    getItem.then((res) => {
      setDetail(res);
    });
  });
  return (
    <>
      {detail.map((item) => (
        <ItemDetail item={item} />
      ))}
      <ItemDetail item={detail} />
    </>
  );
}
