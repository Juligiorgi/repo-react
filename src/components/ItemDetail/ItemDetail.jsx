import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} productos`);
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <h3>Detalle de: {producto.name}</h3>
            <img src={producto.imag} alt={producto.name}></img>
            <p>{producto.descripcion}</p>
            <p>{producto.precio}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/> 
        </div>
    )
}

export default ItemDetail