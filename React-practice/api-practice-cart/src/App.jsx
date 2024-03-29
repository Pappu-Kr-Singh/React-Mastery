import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import ProductListProvider from "./store/product-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <ProductListProvider>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Home" ? <ProductList /> : <Footer />}
    </ProductListProvider>
  );
}

export default App;
