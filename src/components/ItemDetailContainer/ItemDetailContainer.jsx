import React,{useEffect, useState} from "react";
import {getItem} from "../../data/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
  const [producto, setProductos] =useState({})
  const {id} = useParams()

  useEffect(()=>{
    getItem(id)
    .then((res)=> setProductos(res))
    .catch((error)=> setProductos(error))
  },[id])
  return( 
      <div>
        <ItemDetail producto={producto}/>
      </div>
        
     )


}
