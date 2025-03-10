import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "/src/redux/reducers/cartReducers.js";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Cart.css";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SHIPPING_FEE = 5.0;
  const finalTotal = totalPrice + (cartItems.length > 0 ? SHIPPING_FEE : 0);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Subtotal: ${totalPrice.toFixed(2)}</h3>
              <h3>Shipping: ${cartItems.length > 0 ? SHIPPING_FEE.toFixed(2) : "0.00"}</h3>
              <h2>Total: ${finalTotal.toFixed(2)}</h2>
              <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;