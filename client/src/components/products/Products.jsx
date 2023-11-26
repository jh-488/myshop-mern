import { Link } from "react-router-dom";
import "./Products.css";

const Product = ({imageUrl, name, description, price, productId}) => {
  return (
    <div className="product__card">
      <img src={imageUrl} alt={name} />
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__description">{description.substring(0, 100)}...</p>
        <p className="product__price">$ {price}</p>
        <Link to={`/product/${productId}`} className="product__button">View</Link>
      </div>
    </div>
  )
}

export default Product
