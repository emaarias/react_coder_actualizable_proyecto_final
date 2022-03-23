import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/menu';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

/* import ItemCount from './container/itemCount'; */



function App() {
  return (

    <BrowserRouter>

      <div className="App">
        <Menu />

        <main className="App-header">
    <Routes>
          <Route path='/' element ={<ItemListContainer greeting="👋 Hola próximamente seré un catálogo de productos!" />}/>
          <Route path='detalle' element ={<ItemDetailContainer />}/>
          <Route path='/*' element ={<Navigate to='/' />}/>



    </Routes>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
