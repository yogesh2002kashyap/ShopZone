// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context object
const CartContext = createContext();

// 2. Create the Provider component (this wraps your whole app)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('shopzone-cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Every time cartItems changes, save to localStorage
  useEffect(() => {
    localStorage.setItem('shopzone-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item — if already in cart, increase quantity
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove item completely
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Total number of items (for badge)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Total price
  const cartTotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook for easy access (convenience)
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);