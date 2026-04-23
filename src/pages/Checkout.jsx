// src/pages/Checkout.jsx
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cartItems, cartTotal, cartCount } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handlePlaceOrder = () => {
    alert('Order placed! (demo)');
  };

  return (
    <div className="page-wrapper">
      <div className={styles.header}>
        <span className={styles.tag}>✓ Logged in as Guest</span>
        <h1 className={styles.title}>Checkout</h1>
        <p className={styles.subtitle}>Review your order before placing it.</p>
      </div>

      <div className={styles.layout}>
        {/* ── Left: Order Items ── */}
        <div className={styles.itemsList}>
          <p className={styles.listHeader}>
            {cartCount} item{cartCount !== 1 ? 's' : ''} in your order
          </p>

          {cartItems.map(item => (
            <div key={item.id} className={styles.item}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.itemImage}
              />
              <div className={styles.itemInfo}>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemMeta}>
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <span className={styles.itemSubtotal}>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* ── Right: Summary ── */}
        <div className={styles.summary}>
          <p className={styles.summaryTitle}>Payment Summary</p>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${cartTotal}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Tax</span>
            <span>$0.00</span>
          </div>

          <hr className={styles.divider} />

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalPrice}>${cartTotal}</span>
          </div>

          <button className={styles.placeOrderBtn} onClick={handlePlaceOrder}>
            Place Order →
          </button>

          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout & Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;