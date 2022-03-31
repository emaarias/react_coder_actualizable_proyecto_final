import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/menu';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import { CartContext } from './context/cartContext';

/* import ItemCount from './container/itemCount'; */

console.log('cart context ',CartContext);

function App() {
  return (

    <BrowserRouter>

      <CartContext.Provider>


        <div className="App">
          <Menu />

          <main className="App-header">
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="👋 Hola próximamente seré un catálogo de productos!" />} />
              <Route path='/gender/:idGender' element={<ItemListContainer greeting="👋 Hola próximamente seré un catálogo de productos!" />} />
              <Route path='detalle/:idDetail' element={<ItemDetailContainer />} />
              <Route path='/*' element={<Navigate to='/' />} />
              <Route path='cart' element={<Cart />} />


            </Routes>
          </main>
        </div>

      </CartContext.Provider>


    </BrowserRouter>

  );
}

export default App;
