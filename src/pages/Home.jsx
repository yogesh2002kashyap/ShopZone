// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Free Shipping on Orders Over $50</p>

      <h1 className={styles.headline}>
        Shop <span>Everything</span>,<br />Pay Less.
      </h1>

      <p className={styles.subtext}>
        Browse hundreds of products across every category.
        Great prices, zero compromise on quality.
      </p>

      <div className={styles.ctaGroup}>
        <Link to="/shop" className={styles.btnPrimary}>
          Browse Shop →
        </Link>
        <Link to="/contact" className={styles.btnSecondary}>
          Contact Us
        </Link>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>200+</span>
          <span className={styles.statLabel}>Products</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>30+</span>
          <span className={styles.statLabel}>Categories</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>4.8★</span>
          <span className={styles.statLabel}>Avg Rating</span>
        </div>
      </div>
    </section>
  );
};

export default Home;