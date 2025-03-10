import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Future of Shopping</h1>
        <p>Unbeatable deals on the latest tech, fashion, and more!</p>
        <Link to="/products">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;