import React, { useEffect, useState} from "react";
import { Title } from "../Title/Title";
import {ItemList} from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";



export const ItemListContainer=()=>{
  const [productos, setProduto] = useState([]);
  const { categoria } = useParams();
useEffect(() => {

const db = getFirestore();
const productoCollection = collection(db, "productos");
const q = categoria ? query(productoCollection, where("categoria", "==", categoria)) : productoCollection;

getDocs(q).then((snapshot) => {

 console.log("entra al then");

 if (snapshot.size > 0) {

  const producto = snapshot.docs.map((doc) => {

   return {
    id: doc.id,
    ...doc.data(),
   }
  });
  console.log(producto);
  setProduto(producto);
 }
})

}, [categoria])

if (!productos) {

return <div>loading...</div>;

}
 return(<div>  
            <Title greeting = "Bienvenido a Lemons"/>
            <ItemList productos={productos}/>
            </div>
    )


    
}

