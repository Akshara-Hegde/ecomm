import React from 'react'

const Footer = () => {
  return (
    <footer style={{ padding: "1%", background: "lightcoral" }} className="footer">
      <div>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          scelerisque urna.
        </p>
      </div>
      <div className="footer-section">
        <h3>Customer Service</h3>
        <ul style={{listStyle:"none"}}>
          <li >
            <a style={{ color: "black", textDecoration: "none" }} href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a style={{ color: "black", textDecoration: "none" }} href="#">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      {/* Add more sections as needed */}
    </footer>
  );
}

export default Footer