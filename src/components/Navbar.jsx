// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useCart } from '../context/CartContext';

const Navbar = () => {

  const { cartCount } = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Brand */}
        <Link to="/" className={styles.brand}>ShopZone</Link>

        {/* Nav links */}
        <ul className={styles.links}>
          <li>
            {/* "end" = only active on exact "/" */}
            <NavLink
              to="/"
              end                                        
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              Contact
            </NavLink>
          </li>

          {/* Cart link — badge wired in Level 2 */}
          <li>
            <Link to="/cart" className={styles.cartLink}>
              🛒 Cart 
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;