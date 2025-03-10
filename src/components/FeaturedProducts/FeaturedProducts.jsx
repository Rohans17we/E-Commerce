import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "/src/redux/reducers/cartReducers.js"; // ✅ Import action
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const dispatch = useDispatch(); // ✅ Get dispatch function

  useEffect(() => {
    setTimeout(() => {
      setFeaturedProducts([
        { id: 1, name: "Wireless Headphones", price: 99, img: "/src/assets/Images/FeaturedProducts/WirelessHeadphones.avif" },
        { id: 2, name: "Smart Watch", price: 199, img: "/src/assets/Images/FeaturedProducts/SmartWatch.webp" },
        { id: 3, name: "Gaming Laptop", price: 1299, img: "/src/assets/Images/FeaturedProducts/GamingLaptop.jpg" },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="featured">
      <h2>🔥 Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.length === 0 ? (
          <p className="loading">Loading Products...</p>
        ) : (
          featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button> {/* ✅ Dispatch action */}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;