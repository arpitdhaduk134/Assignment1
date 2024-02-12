import React from "react";

const ShoppingCartPage = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-item-details">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span className="quantity-display">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
          <img src={item.image} alt={item.name} className="cart-item-image" />
        </div>
      ))}
      <button>Finalize Purchase</button>
    </div>
  );
};

export default ShoppingCartPage;
