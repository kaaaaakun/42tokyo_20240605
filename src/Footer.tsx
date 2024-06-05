import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <nav
      style={{
        borderTop: "1px solid",
        borderBottom: "1px solid",
        marginBottom: "20px",
      }}
    >
      <Link to="/privacy">プライバシーポリシー</Link>
    </nav>
  );
}

export default Footer;
