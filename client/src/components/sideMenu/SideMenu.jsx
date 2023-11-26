import "./SideMenu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/context";


const SideMenu = ({ display, toggle }) => {

  const { getItemsInCartCount } = useContext(ShopContext);
  const itemsCount = getItemsInCartCount();

  return (
    <>
      {display ? (
        <div className="sidemenu display">
          <ul className="sidemenu__links" onClick={toggle}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                Cart
                <span className="sidemenu__cartcount">{itemsCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="sidemenu"></div>
      )}
    </>
  );
};

export default SideMenu;
