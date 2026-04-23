// src/pages/Login.jsx
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    login();
    navigate('/checkout');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <span className={styles.icon}>🔐</span>

        <h2 className={styles.title}>Login Required</h2>
        <p className={styles.subtitle}>
          You need to be logged in to access checkout.
          No account? No problem — continue as a guest.
        </p>

        <hr className={styles.divider} />

        <button className={styles.guestBtn} onClick={handleGuestLogin}>
          Continue as Guest →
        </button>

        <p className={styles.note}>
          Want to keep browsing?{' '}
          <Link to="/shop">Go back to Shop</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;