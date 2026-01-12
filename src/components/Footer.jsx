function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>FreshMart</h3>
          <p>
            Your daily grocery needs delivered fresh and fast.
          </p>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>Customer Support</li>
            <li>FAQs</li>
            <li>Delivery Info</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Dairy</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FreshMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
