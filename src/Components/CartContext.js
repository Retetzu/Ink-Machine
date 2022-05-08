import { useState, createContext } from "react";

export const CartContext = createContext();
const { Provider } = CartContext 

function CustomProvider ({ children }) {

  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)

  const addProduct = (item) => {
    const isInCart = cart.find((itemInCart) => itemInCart.id === item.id)

    if(isInCart) {
      setCart(
        cart.map((itemInCart) => {
          if(itemInCart.id === item.id) {
            return {...isInCart, amount: isInCart.quantity + item.quantity}
          } else return itemInCart;
        })
      );
    } else {
      setCart([...cart, {...item, amount: item.quantity}]) 
    }
    console.log(isInCart);
    
    console.log(item);
  }
  

  const deleteProduct = (item) => {
    const isInCart = cart.find(
      (itemInCart) => itemInCart.id === item.id
    );

    if(isInCart.amount === 1) {
      setCart(
        cart.filter((itemInCart) => itemInCart.id !== item.id)
      );
    } else {
      setCart(
        cart.map((itemInCart) => {
          if(itemInCart.id === item.id) {
            return { ...isInCart, amount: isInCart.amount - 1 };
          } else return itemInCart;
        })
      );
    }
  };

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