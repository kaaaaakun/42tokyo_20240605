// src/App.tsx

import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Privacy from "./Privacy";
import Products from "./Products";
import Footer from "./Footer";
import SlideShow from "./SlideShow";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="hamburger-button">
        &#9776; {/* ハンバーガーアイコン */}
      </button>
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="https://futsuno.shop/">HOME</a>
          </li>
          <li>
            <a href="https://futsuno.shop/shop/customers/sign_in">ログイン</a>
          </li>
          <li>
            <a href="https://futsuno.shop/shop/pages/brand">ブランド</a>
          </li>
          {/* 他のリンク */}
        </ul>
      </div>
    </>
  );
}

function Header() {
  return (
    <nav
      style={{
        borderBottom: "1px solid",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between", // フレックスコンテナ内のアイテムを両端に配置
        alignItems: "center",
        padding: "0 20px", // 左右に20pxのパディングを追加
      }}
    >
      <a
        href="https://futsuno.shop/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img
          src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/futu_shop_logo.svg"
          alt="Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
      </a>
      <Hamburger /> {/* ハンバーガーメニュー */}
    </nav>
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
