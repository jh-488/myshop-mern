import "./Cart.css";
import CartItem from "../../components/cartitem/CartItem";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/context";
import { useContext } from "react";
import useGetProducts from "../../hooks/useGetProducts";


const Cart = () => {
  const { products } = useGetProducts();

  const { cartItems } = useContext(ShopContext);


  const getTotalItems = () => {
    return products.reduce((totalItems, product) => {
      if (cartItems[product._id]) {
        return totalItems + cartItems[product._id];
      }
      return totalItems;
    }, 0);
  };


  const getSubTotal = () => {
    return products.reduce((subtotal, product) => {
      if(cartItems[product._id]) {
        return subtotal + (product.price * cartItems[product._id])
      }
      return subtotal;
    }, 0)
  }
  
  return (
    <div className="cart">
      <div className="cart__left">
        <h2>Shopping Cart</h2>
        {products.map((product) => {
          if (cartItems[product._id] > 0) {
            return <CartItem key={product._id} item={product}/>
          }
        })}
      </div>
      <div className="cart__right">
        <div className="cart__info">
          <p>Subtotal: <span>{getTotalItems()}</span> items</p>
          <p>$ <span>{getSubTotal()}</span></p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
