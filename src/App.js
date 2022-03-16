import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';
import ItemListContainer from './container/itemListContainer';
import ItemCount from './container/itemCount';



function App() {
  return (

    <div className="App">

      <Menu />

      <main className="App-header">
        <ItemListContainer greeting="👋 Hola próximamente seré un catálogo de productos!" />
        <ItemCount initial={1} stock={10}/>

      </main>


    </div>



  );
}

export default App;
