import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts, STATUSES } from "../store/productSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  //   const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products/");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(fetchProducts());
  }, [dispatch]);
    
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error fetching products</p>;
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
