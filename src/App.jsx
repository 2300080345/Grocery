import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Help from "./pages/Help";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

import "./index.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [products, setProducts] = useState([
    // 🍎 Fruits
    {
      id: 1,
      name: "Apple",
      price: 1.3,
      image: "/images/apple.png",
      quantity: 0,
      category: "Fruits",
    },
    {
      id: 2,
      name: "Banana",
      price: 1.8,
      image: "/images/banana.png",
      quantity: 0,
      category: "Fruits",
    },
    {
      id: 3,
      name: "Orange",
      price: 1.5,
      image: "/images/orange.png",
      quantity: 0,
      category: "Fruits",
    },
    {
      id: 4,
      name: "Grapes",
      price: 2.2,
      image: "/images/grapes.png",
      quantity: 0,
      category: "Fruits",
    },

    // 🥕 Vegetables
    {
      id: 5,
      name: "Tomato",
      price: 0.9,
      image: "/images/tomato.png",
      quantity: 0,
      category: "Vegetables",
    },
    {
      id: 6,
      name: "Potato",
      price: 0.7,
      image: "/images/potato.png",
      quantity: 0,
      category: "Vegetables",
    },
    {
      id: 7,
      name: "Onion",
      price: 0.8,
      image: "/images/onion.png",
      quantity: 0,
      category: "Vegetables",
    },
    {
      id: 8,
      name: "Carrot",
      price: 1.1,
      image: "/images/carrot.png",
      quantity: 0,
      category: "Vegetables",
    },

    // 🥛 Dairy
    {
      id: 9,
      name: "Milk",
      price: 1.5,
      image: "/images/milk.png",
      quantity: 0,
      category: "Dairy",
    },
    {
      id: 10,
      name: "Curd",
      price: 1.2,
      image: "/images/curd.png",
      quantity: 0,
      category: "Dairy",
    },
    {
      id: 11,
      name: "Butter",
      price: 2.5,
      image: "/images/butter.png",
      quantity: 0,
      category: "Dairy",
    },
    {
      id: 12,
      name: "Cheese",
      price: 3.2,
      image: "/images/cheese.png",
      quantity: 0,
      category: "Dairy",
    },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const clearCart = () => {
    setProducts((prev) =>
      prev.map((p) => ({ ...p, quantity: 0 }))
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

return (
  <>
    <Navbar
      cartCount={totalItems}
      search={search}
      setSearch={setSearch}
    />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="cart-summary">
              <h2>🛒 Items: {totalItems}</h2>
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              {totalItems > 0 && (
                <button className="clear-cart" onClick={clearCart}>
                  Clear Cart
                </button>
              )}
            </div>

            <div className="categories">
              {["All", "Fruits", "Vegetables", "Dairy"].map((cat) => (
                <button
                  key={cat}
                  className={category === cat ? "active" : ""}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <section className="products">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onIncrease={() =>
                    setProducts((prev) =>
                      prev.map((p) =>
                        p.id === product.id
                          ? { ...p, quantity: p.quantity + 1 }
                          : p
                      )
                    )
                  }
                  onDecrease={() =>
                    setProducts((prev) =>
                      prev.map((p) =>
                        p.id === product.id && p.quantity > 0
                          ? { ...p, quantity: p.quantity - 1 }
                          : p
                      )
                    )
                  }
                  onRemove={() =>
                    setProducts((prev) =>
                      prev.map((p) =>
                        p.id === product.id
                          ? { ...p, quantity: 0 }
                          : p
                      )
                    )
                  }
                />
              ))}
            </section>
          </>
        }
      />

      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/product/:id"
        element={<ProductDetails products={products} />}
      />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/login"
        element={<Login setIsLoggedIn={setIsLoggedIn} />}
      />

      <Route
        path="/checkout"
        element={
        <Checkout
        products={products}
        totalPrice={totalPrice}
        isLoggedIn={isLoggedIn}
        clearCart={clearCart}
        />
        }
      />

    </Routes>

    <Footer />
  </>
);
}

export default App;
