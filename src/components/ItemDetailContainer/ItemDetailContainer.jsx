import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import {doc, getDocs} from "firebase/firestore";
import { db } from "../../Firebase/config";

export const ItemDetailContainer = () => {
  const [producto, setItem] =useState({})
  const {id} = useParams().id;

  useEffect(()=>{
    const docRef = doc(db, "productos", id);
    getDocs(docRef)
    .then((resp) => {
      setItem(
        {...resp.metadata(), id: resp.id}
      )
    })


  },[id])
  
  
  
  
  return( 
      <div>
        <ItemDetail producto={producto}/>
      </div>
        
     )


}
