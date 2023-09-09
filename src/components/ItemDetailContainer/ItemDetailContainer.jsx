import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import useGetDocumentById from "../../hook/useGetDocumentById";

export const ItemDetailContainer = () => {
  const {id} = useParams();
  
  const{document:producto} = useGetDocumentById("productos", id);

  console.log(producto, id);

   if (!producto){

    return <div>loading

    </div>
   }

 
  
  return( 
      <div>
        <ItemDetail producto={producto}/>
      </div>
        
     )


}
