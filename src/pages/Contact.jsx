// src/pages/Contact.jsx
import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();   // prevent page reload
    alert('Message sent! (demo)');
  };

  return (
    <div className="page-wrapper">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a question or feedback? We'd love to hear from you.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className={styles.input}
              placeholder="Order inquiry, feedback, etc."
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Write your message here..."
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;