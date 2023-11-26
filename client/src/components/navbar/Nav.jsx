import { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/context";

const Nav = ({toggle}) => {

  const { getItemsInCartCount } = useContext(ShopContext);
  const itemsCount = getItemsInCartCount();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2><i className="fa fa-shop"></i> myShop</h2>
      </div>

      <ul className="navbar__links">
        <li>
            <Link to="/">
              Home
            </Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cart__count">{itemsCount}</span>
          </Link>
        </li>
      </ul>

      <div 
        className="hamburger"
        onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Nav
