import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
import Features from "../Components/Features/Features";
import Categories from "../Components/Categories/Categories";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPoducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchPoducts();
  }, []);
  return (
    <div>
      <Categories />
      <div
        className="flex flex-col text-center w-full mb-20"
        bis_skin_checked="1"
      >
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          All PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading......</div>
      )}
    </div>
  );
}

export default Products;
