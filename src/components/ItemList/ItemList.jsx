import React from "react"
import {Item} from '../Item/Item'



export const ItemList =({productos, name}) =>{
    return (
        <div>
            <h2>
                {(name)}
            </h2>
              <div className='d-flex justify-content-around align-items-center flex-wrap'>
                  {productos.map((prod)=> <Item productos={prod} key={prod.id}/>)}
               </div>
        </div>
       
    )
}

