import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/Navbar/Navbar';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Checkout} from "./components/Checkout/Checkout";
import { collection, getDocs, getFirestore, query, } from 'firebase/firestore';
import { CartProvider } from './CartContext/CartContext';
import { useEffect, useState } from 'react';
import app from './Firebase/config';
import {Carrito} from "./components/Carrito/Carrito"

export function App() {
  const [productos, setProduto] = useState([]);
  useEffect(() => {
    const db = getFirestore(app);

    const productoCollection = collection(db, "productos");

    const q = query(productoCollection);

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

  }, [])

  if (!productos) {
    return <div>loading...</div>;
  } 


  return (
    <div>
      <CartProvider>
       <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/item:id' element={<ItemDetailContainer/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App