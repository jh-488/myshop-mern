import { useContext } from "react";
import "./CartItem.css";
import {Link} from "react-router-dom"
import { ShopContext } from "../../context/context";

const CartItem = ({item}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);


  return (
    <div className="cartitem">
      <div className="item__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item._id}`} className="item__name">
        <p>{item.name}</p>
      </Link>

      {/* cartItems[item._id] = item quantity */}
      <div className="item__count">
        <button onClick={() => removeFromCart(item._id, 1)}><i className="fa fa-minus"></i></button>
        <p>{cartItems[item._id]}</p>
        {/* Only add items if they are still in stock */}
        <button 
          onClick={() => {
          if(cartItems[item._id] < item.amountInStock) { 
            addToCart(item._id, 1)
          }
          }}>
          <i className="fa fa-plus"></i></button>
      </div>

      <p className="item__price">$ {item.price * cartItems[item._id]}</p>

      <button 
        className="item__delete"
        onClick={() => removeFromCart(item._id, cartItems[item._id])}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem
