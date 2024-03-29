import React, { useContext, useEffect } from "react";
import { ProductList as productListData } from "../store/product-list-store";
import WelcomeMessege from "./WelcomeMessege";
import Product from "./Product";

const ProductList = () => {
  const { productList, addInitialProducts } = useContext(productListData);

  // const handleGetProductClick = () => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialProducts(data.products);
  //       // console.log(data.products[0].title);
  //     });
  // };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        addInitialProducts(data.products);
        // console.log(data.products[0].title);
      });
  }, []);

  return (
    <>
      {productList.length === 0 && (
        // <WelcomeMessege onGetProductClick={handleGetProductClick} />
        <WelcomeMessege />
      )}
      <div className="product_container">
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
