import React, { useEffect, useState} from "react";
import { Title } from "../Title/Title";
import {ItemList} from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../Firebase/config";

 const ItemListContainer = () =>{
   const [productos, setProductos] =useState([])
   
   const {categoriaId} =useParams
    
   useEffect(()=>{
      const productosRef =collection (db, "productos");
      
      const q = categoriaId ?query(productosRef, where("categoria", "==", categoriaId)) : productosRef;
       
      getDocs(q)
          .then((resp) => {
            

            setProductos(
              resp.docs.map((doc) =>{
                return {...doc.data(), id: doc.id}
              })
            );
          })
        

           
              
         
          },[categoriaId])       

    
 return(<div>  
            <Title greeting = "Bienvenido a Lemons"/>
            <ItemList productos={productos}/>
            </div>
    )


    
}
export default ItemListContainer

