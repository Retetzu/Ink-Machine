import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return <>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer />
    </>;
}

export default App;
