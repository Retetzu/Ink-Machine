import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from './Components/CartContext';
import Cart from './Components/Cart';

function App() {
  return <>
 <CustomProvider>
   <BrowserRouter>
    <NavBar />

     <Routes>
       <Route exact path='/' element={ <ItemListContainer />} />
       <Route exact path='/category/:id' element={ <ItemListContainer /> } />
       <Route exact path='/item/:id' element={ <ItemDetailContainer />} />
       <Route exact path='/cart' element={ <Cart />} />
     </Routes>  

   </BrowserRouter>
 </CustomProvider>  
  </>;
}

export default App;
