import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';
import ItemListContainer from './container/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

/* import ItemCount from './container/itemCount'; */



function App() {
  return (

    <div className="App">

      <Menu />
      <main className="App-header">
        <ItemListContainer greeting="👋 Hola próximamente seré un catálogo de productos!" />
        <ItemDetailContainer/>

      </main>

    </div>
  );
}

export default App;
