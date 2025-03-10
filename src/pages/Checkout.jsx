import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const SHIPPING_FEE = 5.0;
  const finalTotal = totalPrice + (cartItems.length > 0 ? SHIPPING_FEE : 0);

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h2>Checkout</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Add items before checking out.</p>
        ) : (
          <div className="order-summary">
            <h3>Order Summary</h3>
            <table className="summary-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="total-section">
              <p><strong>Subtotal:</strong> ${totalPrice.toFixed(2)}</p>
              <p><strong>Shipping:</strong> ${SHIPPING_FEE.toFixed(2)}</p>
              <h2><strong>Total:</strong> ${finalTotal.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;