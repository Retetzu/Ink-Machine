import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./Data/Data";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

  const {id} = useParams()
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === Number(id)));
      }, );
    });
    getItem.then((res) => {
      setDetail(res);
    });
  }, [id]);
  return (
    <>
      <ItemDetail item={detail} key={detail.id}/>
    </>
  );
}
