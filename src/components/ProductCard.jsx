import { Link } from "react-router-dom";

function ProductCard({ product, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>

      <p>${product.price} / kg</p>

      <div className="quantity-controls">
        <button onClick={onDecrease} disabled={product.quantity === 0}>−</button>
        <span>{product.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>

      {product.quantity > 0 && (
        <button className="remove-btn" onClick={onRemove}>
          Remove
        </button>
      )}
    </div>
  );
}

export default ProductCard;
