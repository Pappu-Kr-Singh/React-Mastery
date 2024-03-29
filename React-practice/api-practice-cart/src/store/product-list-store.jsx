import { createContext, useReducer } from "react";

export const ProductList = createContext({
  productList: [],
  deleteProduct: () => {},
  addInitialProducts: () => {},
});

const productListReducer = (currProductList, action) => {
  let newProductList = currProductList;
  if (action.type === "DELETE_PRODUCT") {
    newProductList = currProductList.filter(
      (product) => product.id !== action.payload.productId
    );
  } else if (action.type === "ADD_INITIAL_PRODUCTS") {
    newProductList = action.payload.products;
  }

  return newProductList;
};

const ProductListProvider = ({ children }) => {
  const [productList, dispatchPostList] = useReducer(
    productListReducer,
    // DEFAULT_PRODUCT_LIST
    []
  );

  const deleteProduct = (productId) => {
    dispatchPostList({
      type: "DELETE_PRODUCT",
      payload: {
        productId,
      },
    });
  };

  const addInitialProducts = (products) => {
    dispatchPostList({
      type: "ADD_INITIAL_PRODUCTS",
      payload: {
        products,
      },
    });
  };

  return (
    <ProductList.Provider
      value={{
        productList,
        // addPost,
        deleteProduct,
        addInitialProducts,
      }}
    >
      {children}
    </ProductList.Provider>
  );
};

const DEFAULT_PRODUCT_LIST = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ["history", "american", "crime"],
    reactions: 2,
  },
];

export default ProductListProvider;
