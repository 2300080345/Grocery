import { useParams, Link } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="page">
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <img src={product.image} alt={product.name} style={{ height: 200 }} />
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price} / kg</p>
      <Link to="/">← Back to products</Link>
    </div>
  );
}

export default ProductDetails;
