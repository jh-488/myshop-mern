import "./Home.css";
import Products from "../../components/products/Products";
import useGetProducts from "../../hooks/useGetProducts";
import { useState } from "react";


const Home = () => {
  const { products, isLoading } = useGetProducts();
  

  return (
    <div className="home">
      <h2>Our Products</h2>
      <div className="products">
        {isLoading ? <div className="loading"></div> :
          products.map((product) => 
            <Products 
              key={product._id} 
              productId={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              description={product.description}
              price={product.price}
            />)
        }
      </div>
    </div>
  );
};

export default Home;
