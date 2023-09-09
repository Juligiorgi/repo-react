import ItemCount from "../ItemCount/ItemCount";
import React, { useContext, useState } from "react";
import {CartContext} from '../../CartContext/CartContext'



const ItemDetail = ({producto}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);
    
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    
    const handleSumar = () => {
        cantidad <producto.stock && setCantidad(cantidad + 1)
    }



    
        return (
            <div className="d-flex flex-column align-items-center">
                <h3>Detalle de: {producto.name}</h3>
                <img src={producto.imag} alt={producto.name}></img>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
    
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>{agregarAlCarrito(producto,cantidad)}}/> 
            </div>
        )

}    

export default ItemDetail