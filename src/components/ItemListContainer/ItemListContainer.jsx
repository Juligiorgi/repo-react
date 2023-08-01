import React, { useEffect, useState} from "react";
import { Title } from "../Title/Title";
import{ItemList} from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { getProductos } from "../../data/data";

export const ItemListContainer = () =>{
   const [productos, setProductos] =useState([])
    const {categoriaId} = useParams()

    useEffect(()=>{
        getProductos()
        .then((res)=> setProductos(res))
        .catch((error)=> setProductos(error))
    },[])
    
    const onAdd = (cantidad) =>{
        console.log(`Compraste ${cantidad} productos`);
      }
   
    
    
 return(<div>  
            <Title greeting = "Bienvenido a Lemons"/>
            <ItemList productos={productos}/>
            </div>
    )


    
}
export default ItemListContainer

