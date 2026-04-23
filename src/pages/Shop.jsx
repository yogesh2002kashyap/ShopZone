// src/pages/Shop.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Shop.module.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading products...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className={styles.header}>
        <h1 className={styles.title}>All Products</h1>
        <p className={styles.subtitle}>{products.length} items available</p>
      </div>

      <div className={styles.grid}>
        {products.map(product => (
          <div
            key={product.id}
            className={styles.card}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className={styles.imageWrap}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.image}
              />
            </div>

            <div className={styles.cardBody}>
              <p className={styles.category}>{product.category}</p>
              <h3 className={styles.cardTitle}>{product.title}</h3>
              <div className={styles.cardFooter}>
                <span className={styles.price}>${product.price}</span>
                <span className={styles.rating}>
                  <span className={styles.ratingDot}>★</span>
                  {product.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;