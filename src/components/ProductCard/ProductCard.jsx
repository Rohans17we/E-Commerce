import { useDispatch } from "react-redux";
import { addToCart } from "/src/redux/reducers/cartReducers.js"; // ensure the filename matches
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;