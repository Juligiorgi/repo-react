import React, { useEffect, useState} from "react";
import { Title } from "../Title/Title";
import {ItemList} from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {getProductos}  from "../../mock/data";
import {getProductosCategoria} from "../../mock/data";

 const ItemListContainer = () =>{
   const [productos, setProductos] =useState([])
   
   const {categoriaId} =useParams
    
   useEffect(()=>{
       if(categoriaId){
        getProductosCategoria(categoriaId).then ((res)=> setProductos(res))
       }
       else{
        getProductos().then((res)=>setProductos(res))
       }
   },[categoriaId])
    
 return(<div>  
            <Title greeting = "Bienvenido a Lemons"/>
            <ItemList productos={productos}/>
            </div>
    )


    
}
export default ItemListContainer

