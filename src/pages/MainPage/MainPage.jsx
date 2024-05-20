import React, { useState } from "react";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation here
    // For simplicity, let's just log the form data
    console.log({ name, email, quantity });
  };

  return (
    <div className="App">
      <header>
        <h1>TechTrek X Smartphone</h1>
      </header>
      <main>
        {/* Product Page */}
        <section className="product-page">
          <h2>Product Details</h2>
          <div className="product-info">
            <div className="product-image">
              {/* Insert product images or videos here */}
              <img src="techtrek-x.jpg" alt="TechTrek X Smartphone" />
            </div>
            <div className="product-description">
              <p>Product description goes here...</p>
            </div>
          </div>
        </section>

        {/* Order form */}
        <section className="order-form">
          <h2>Pre-Order Now</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min={1}
                max={10}
                required
              />
            </label>
            <button type="submit">Place Order</button>
          </form>
        </section>

        {/* News Feed */}
        <section className="news-feed">
          <h2>News Feed</h2>
          {/* Insert news updates here */}
          <ul>
            <li>Release date announced for TechTrek X!</li>
            <li>New features revealed.</li>
            {/* Add more news items */}
          </ul>
        </section>

        {/* Contact information */}
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
