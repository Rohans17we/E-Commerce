import { useState } from "react";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import "./Products.css";

// Dummy Data for Products
const categories = {
  Electronics: [
    { id: 1, name: "Laptop", price: 999, image: "/src/assets/Images/Producst/Laptop.jpg" },
    { id: 2, name: "Headphones", price: 199, image: "/src/assets/Images/Producst/Headphones.avif" },
    { id: 3, name: "Smartphone", price: 699, image: "/src/assets/Images/Producst/SmartPhone.avif" },
    { id: 4, name: "Smartwatch", price: 299, image: "/src/assets/Images/Producst/SmartWatch.webp" },
  ],
  Clothing: [
    { id: 5, name: "T-Shirt", price: 29, image: "/src/assets/Images/Producst/Tshirt.avif" },
    { id: 6, name: "Jeans", price: 49, image: "/src/assets/Images/Producst/Jeans.avif" },
    { id: 7, name: "Jacket", price: 99, image: "/src/assets/Images/Producst/Jacket.avif" },
    { id: 8, name: "Shoes", price: 79, image: "/src/assets/Images/Producst/Shoes.avif" },
  ],
  Accessories: [
    { id: 9, name: "Sunglasses", price: 39, image: "/src/assets/Images/Producst/SunGlasses.avif" },
    { id: 10, name: "Backpack", price: 59, image: "/src/assets/Images/Producst/Backpack.avif" },
    { id: 11, name: "Wallet", price: 25, image: "/src/assets/Images/Producst/Wallet.avif" },
    { id: 12, name: "Watch", price: 150, image: "/src/assets/Images/Producst/Watch.avif" },
  ],
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  return (
    <>
      <Navbar />
      <div className="products-container">
        <h2>Our Products</h2>
        <div className="category-buttons">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {categories[selectedCategory].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;