import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import {CartContext} from '../../CartContext/CartContext'




const ItemDetail = ({item}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);
    
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }



    
        return (
            <div className="d-flex flex-column align-items-center">
                <h3>Detalle de: {item.name}</h3>
                <img src={item.imag} alt={item.name}></img>
                <p>{item.descripcion}</p>
                <p>{item.precio}</p>
    
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>{agregarAlCarrito(item,cantidad)}}/> 
            </div>
        )

}    

export default ItemDetail