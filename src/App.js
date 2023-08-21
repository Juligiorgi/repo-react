import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/Navbar/Navbar';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {CartContext} from './CartContext/CartContext';

function App() {


  return (
    <div>
      <CartContext.Provider>
       <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId'/>
        <Route path='/item:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App