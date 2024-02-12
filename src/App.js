import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./compoents/ProductPage";
import ShoppingCartPage from "./compoents/ShoppingCartPage";
import AccountPage from "./compoents/AccountPage"; 
import "./asset/css/style.css";
import "./asset/css/navbar.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <h1>My Shopping Website</h1>
        </header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Product Page</Link>
            </li>
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </nav>
        <main className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<ProductPage addToCart={addToCart} />} 
            />
            <Route
              path="/cart"
              element={
                <ShoppingCartPage
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />
            <Route path="/account" element={<AccountPage />} /> 
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; Arpit Sanjaybhai Dhaduk</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
