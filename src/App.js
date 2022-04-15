import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <>
  <BrowserRouter>
    <NavBar />

   <Routes>
     <Route exact path='/' element={ <ItemListContainer />} />
     <Route exact path='/category/:id' element={ <ItemListContainer /> } />
     <Route exact path='/item/:id' element={ <ItemDetailContainer />} />
   </Routes>  

  </BrowserRouter>
  </>;
}

export default App;
