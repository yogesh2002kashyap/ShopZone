// src/pages/Cart.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal, cartCount, addToCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="page-wrapper">
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🛒</span>
          <p className={styles.emptyText}>Your cart is empty</p>
          <p className={styles.emptySubtext}>Looks like you haven't added anything yet.</p>
          <Link to="/shop" className={styles.shopBtn}>Browse Shop →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className={styles.header}>
        <h1 className={styles.title}>Your Cart</h1>
        <p className={styles.subtitle}>{cartCount} item{cartCount !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className={styles.layout}>
        {/* ── Left: Cart Items ── */}
        <div className={styles.itemsList}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.itemImage}
              />

              <div className={styles.itemInfo}>
                <p className={styles.itemCategory}>{item.category}</p>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemPrice}>${item.price} each</p>

                {/* Quantity controls */}
                <div className={styles.qtyRow}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => removeFromCart(item.id)}  // removes one — swap logic if needed
                  >−</button>
                  <span className={styles.qtyValue}>{item.quantity}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => addToCart(item)}
                  >+</button>
                </div>
              </div>

              <div className={styles.itemActions}>
                <span className={styles.itemSubtotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: Order Summary ── */}
        <div className={styles.summary}>
          <p className={styles.summaryTitle}>Order Summary</p>

          {cartItems.map(item => (
            <div key={item.id} className={styles.summaryRow}>
              <span>{item.title} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <hr className={styles.divider} />

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalPrice}>${cartTotal}</span>
          </div>

          {/* Wire to /checkout in Level 3 */}
          <Link to="/checkout" className={styles.checkoutBtn}>
            Proceed to Checkout →
          </Link>
          <Link to="/shop" className={styles.continueLink}>
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;