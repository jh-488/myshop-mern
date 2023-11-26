import { useState, useEffect, useContext } from "react";
import "./Product.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/context";

const Product = () => {
  const { addToCart, exceededAmount } = useContext(ShopContext);

  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [invalidInput, setInvalidInput] = useState(false);

  const getProduct = async () => {
    const _product = await axios.get(
      `http://localhost:3001/api/products/${id}`
    );
    setProduct(_product.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  // Only add items to the cart if there is enough in stock
  const handleAddToCart = () => {
    const qty = Number(quantity);
    if (qty > 0 && Number.isInteger(qty)) {
      addToCart(product._id, Number(quantity));
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="product">
          <div className="product__leftcolumn">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__content">
              <p className="left__name">{product.name}</p>
              <p className="left__price">Price: $ {product.price}</p>
              <p className="left__description">
                Descriprion: {product.description}
              </p>
            </div>
          </div>
          <div className="product__rightcolumn">
            <div className="right__content">
              <p>
                Total: <span>$ {product.price * quantity}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.amountInStock > 0 ? "In Stock" : "Out Of Stock"}
                </span>
              </p>
              <p>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </p>
              {exceededAmount && (
                <p className="error__message">
                  The maximum amount in stock is {product.amountInStock}!
                </p>
              )}
              {invalidInput && (
                <p className="error__message">Please enter a valid input!</p>
              )}
              <p>
                <button onClick={handleAddToCart}>Add To Cart</button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
