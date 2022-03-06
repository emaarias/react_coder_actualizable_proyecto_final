import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';


function App() {
  return (

    <div className="App">
       <Menu />

      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App React Emanuel Arias
        </p>

      </main>


    </div>



  );
}

export default App;
