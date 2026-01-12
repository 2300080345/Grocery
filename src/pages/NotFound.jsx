import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page">
      <h2>404 - Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">← Go back to Home</Link>
    </div>
  );
}

export default NotFound;
