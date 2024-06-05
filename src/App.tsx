// src/App.tsx

import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Privacy from "./Privacy";
import Products from "./Products";
import Footer from "./Footer";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        style={{ fontSize: "30px", cursor: "pointer" }}
      >
        &#9776; {/* ハンバーガーアイコン */}
      </button>
      {isOpen && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/privacy" onClick={toggleMenu}>
            Privacy Policy
          </Link>
        </nav>
      )}
    </div>
  );
}

function Header() {
  return (
    <nav
      style={{
        borderBottom: "1px solid",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Hamburger /> {/* ハンバーガーメニューを追加 */}
      <a
        href="https://futsuno.shop/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
          marginLeft: "20px",
        }}
      >
        <img
          src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/futu_shop_logo.svg"
          alt="Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
      </a>
    </nav>
  );
}

function SlideShow() {
  return (
    <img
      src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/pages/top/kv/kv_gift_sp.webp"
      alt="Slide Show"
      style={{ width: "100%", height: "500px" }}
    />
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <SlideShow />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
