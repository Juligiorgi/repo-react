import React, {useState}from 'react'


const ItemCount =({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    return(
        <div className="d-flex flex-column align-items-start justify-content-between">
            <div>
            <button variant="dark"onClick={handleRestar}>-</button>
                <p className="btn">{cantidad}</p>
                <button variant="dark" onClick={handleSumar}>+</button>
            </div>
            <button className="mt-3" variant="dark" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount