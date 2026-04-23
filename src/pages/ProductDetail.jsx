// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setActiveImage(data.thumbnail);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading product...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page-wrapper">
        <div className={styles.error}>Product not found.</div>
      </div>
    );
  }

  // Build star string from rating (e.g. 4.3 → "★★★★☆")
  const fullStars = Math.round(product.rating);
  const stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);

  return (
    <div className="page-wrapper">
      {/* Back button */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className={styles.layout}>
        {/* ── Left: Images ── */}
        <div className={styles.imageCol}>
          <img
            src={activeImage}
            alt={product.title}
            className={styles.mainImage}
          />

          {/* Thumbnail strip — only shown if multiple images */}
          {product.images?.length > 1 && (
            <div className={styles.thumbs}>
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.title} view ${i + 1}`}
                  className={`${styles.thumb} ${activeImage === img ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Right: Info ── */}
        <div className={styles.infoCol}>
          <p className={styles.category}>{product.category}</p>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.ratingRow}>
            <span className={styles.stars}>{stars}</span>
            <span className={styles.ratingValue}>{product.rating}</span>
            <span className={styles.ratingCount}>({product.stock} in stock)</span>
          </div>

          <p className={styles.price}>
            ${product.price}
            {product.discountPercentage > 0 && (
              <span>— {product.discountPercentage}% off</span>
            )}
          </p>

          <hr className={styles.divider} />

          <p className={styles.description}>{product.description}</p>

          {/* Meta chips */}
          <div className={styles.metaRow}>
            <span className={styles.chip}>
              <strong>Brand:</strong> {product.brand || 'N/A'}
            </span>
            <span className={styles.chip}>
              <strong>SKU:</strong> {product.sku || id}
            </span>
            {product.warrantyInformation && (
              <span className={styles.chip}>{product.warrantyInformation}</span>
            )}
          </div>

          {/* Add to Cart — wired in Level 2 */}
          <button className={styles.addBtn} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;