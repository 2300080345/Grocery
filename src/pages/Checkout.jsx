import { Navigate } from "react-router-dom";

function Checkout({ products, totalPrice, isLoggedIn, clearCart }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const items = products.filter(p => p.quantity > 0);

  const placeOrder = () => {
    alert("✅ Order placed successfully!");
    clearCart();
  };

  return (
    <div className="page">
      <h2>Checkout</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} × {item.quantity}
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
