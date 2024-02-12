import React, { useState } from "react";
import product1Image from "../asset/Product.jpeg";
import product2Image from "../asset/Product.jpeg";
import product3Image from "../asset/Product.jpeg";
import product4Image from "../asset/Product.jpeg";
import product5Image from "../asset/Product.jpeg";
import "../asset/css/product.css";

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      price: 10,
      image: product1Image,
      quantity: 0,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      price: 15,
      image: product2Image,
      quantity: 0,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description 3",
      price: 20,
      image: product3Image,
      quantity: 0,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description 4",
      price: 25,
      image: product4Image,
      quantity: 0,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description 5",
      price: 30,
      image: product5Image,
      quantity: 0,
    },
  ]);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const handleIncrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === productId
          ? { ...prevProduct, quantity: prevProduct.quantity + 1 }
          : prevProduct
      )
    );
  };

  const handleDecrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === productId && prevProduct.quantity > 0
          ? { ...prevProduct, quantity: prevProduct.quantity - 1 }
          : prevProduct
      )
    );
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="product-buttons">
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
