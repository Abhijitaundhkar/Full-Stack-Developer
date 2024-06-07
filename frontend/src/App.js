import React, { useState } from "react";
import ProductList from "./components/productList";
import CartPage from "./components/CartPage";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("products");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Number(quantity) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => setCurrentPage("products")}>Products</button>
        <button onClick={() => setCurrentPage("cart")}>
          Cart ({cart.length})
        </button>
      </header>
      {currentPage === "products" && <ProductList addToCart={addToCart} />}
      {currentPage === "cart" && (
        <CartPage
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
