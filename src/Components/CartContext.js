import { useState, createContext } from "react";

export const CartContext = createContext();
const { Provider } = CartContext 

function CustomProvider ({ children }) {

  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)

  const isInCart = (item) => {
    let search = cart.find((e) => e.product === item.product)
    return search
  }

  const addProduct = (item) => {
    if(isInCart(item) === undefined) {
      setCart([...cart, item])
      setPrice(price + item.finalValue)
      console.log('Se agrego el producto al carrito');
    } else {
      alert('Este producto fue agregado recientemente')
    }
  }
  const deleteProduct = (index) => {
    let copy = cart.slice()
    setPrice(price - copy[index].finalValue)
    copy.splice(index, 1)
    setCart([...copy])
  }

  const cartVoid = () => {
    setCart([])
  }

  const contextValue = {
    cart,
    price,
    addProduct,
    deleteProduct,
    cartVoid

  }

return (
  <Provider value={contextValue}>
    {children}
  </Provider>
 )
}

export default CustomProvider