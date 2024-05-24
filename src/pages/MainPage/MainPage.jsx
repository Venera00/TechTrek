import React, { useState } from "react";
import phone from "../../assets/smartpone.jpg";
import samsung from "../../assets/samsung.jpg";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, quantity });

    setName("");
    setEmail("");
  };

  return (
    <div className="App">
      <header>
        <h1>TechTrek X Smartphone</h1>
      </header>
      <main>
        <section className={styles.product_page}>
          <h2>Product Details</h2>
          <div className={styles.product_info}>
            <div className={styles.product_image}>
              <img
                src={samsung}
                className={styles.product_img}
                alt="TechTrek Smartphone"
              />
            </div>
            <div className={styles.product_description}>
              <p>
                Elevate your digital experience with the revolutionary TechTrek
                X smartphone, meticulously crafted to redefine convenience,
                efficiency, and style in the palm of your hand.
              </p>

              <img src={phone} alt="TechTrek X Smartphone" />
              <h3>Powerful Performance</h3>
              <p>
                Powered by cutting-edge technology, the TechTrek X delivers
                lightning-fast performance and responsiveness. Equipped with a
                powerful processor and ample RAM, it effortlessly handles
                multitasking, gaming, and productivity tasks with ease.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.order_form}>
          <h2>Pre-Order Now</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <p>Name:</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              <p>Email:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <p>Quantity:</p>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min={1}
                max={10}
                required
              />
            </label>
            <button type="submit" className={styles.btn}>
              Place Order
            </button>
          </form>
        </section>

        <section className="news-feed">
          <h2>News Feed</h2>

          <ul>
            <li>Release date announced for TechTrek X!</li>
            <li>New features revealed.</li>
          </ul>
        </section>
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>Email: info@techtrek.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
