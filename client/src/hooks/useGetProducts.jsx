import { useState, useEffect } from "react";
import axios from "axios";

// Fetch all products from the API
const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const _products = await axios.get("http://localhost:3001/api/products");
    setProducts(_products.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);


  return { products, isLoading };
};

export default useGetProducts;
