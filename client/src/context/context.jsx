import { createContext, useState, useEffect } from "react";
import useGetProducts from "../hooks/useGetProducts";

export const ShopContext = createContext(null);

const ContextProvider = (props) => {
  const { products } = useGetProducts();

  /* 
    cartItems structure :
    { 
      id1: qty, 
      id2: qty, 
      ...
    } 
  */

  const [cartItems, setCartItems] = useState(() => { 
    const data = window.localStorage.getItem("ITEMS_IN_CART");
    const initialState = JSON.parse(data);
    return initialState || {} } 
  );

  const [exceededAmount, setExceededAmount] = useState(false);


  // Save cartItems state to localstorage
  useEffect(() => {
    window.localStorage.setItem("ITEMS_IN_CART", JSON.stringify(cartItems));
  }, [cartItems]);

  // Only add items to cart if there is enough in stock
  const addToCart = (itemId, qty) => {
    const updatedQuantity = cartItems[itemId] ? cartItems[itemId] + qty : qty;

    if (updatedQuantity <= products.find(product => product._id === itemId).amountInStock) {
      setCartItems((prev) => ({ ...prev, [itemId]: updatedQuantity }));
      setExceededAmount(false);
    } else {
      setExceededAmount(true);
    }
  };

  const removeFromCart = (itemId, qty) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - qty }));

    // remove error message if quantity is again smaller than the stock
    const updatedQuantity = cartItems[itemId];
    if (updatedQuantity <= products.find(product => product._id === itemId).amountInStock) {
      setExceededAmount(false);
    }
  };

  // Get total elements in cart by summing the values of each product
  const getItemsInCartCount = () => {
    let count = 0;
    for (const key in cartItems) {
      count += cartItems[key];
    }
    return count;
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getItemsInCartCount,
    exceededAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;
