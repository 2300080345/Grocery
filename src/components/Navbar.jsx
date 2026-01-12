import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({
  cartCount,
  search,
  setSearch,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        <NavLink to="/" className="home-link">FreshMart</NavLink>
      </h1>

      <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/about">About</NavLink>

        {isLoggedIn && <NavLink to="/checkout">Checkout</NavLink>}

        {!isLoggedIn ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <button className="logout-btn" onClick={logout}>Logout</button>
        )}
      </div>

      <input
        className="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cart">
        🛒 <span className="cart-badge">{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
