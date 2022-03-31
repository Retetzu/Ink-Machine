import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return <>
    <NavBar />
    <ItemListContainer greetings="greetings" />
    </>;
}

export default App;
