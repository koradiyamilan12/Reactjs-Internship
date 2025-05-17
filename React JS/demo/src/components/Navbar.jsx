import reactlogo from "../assets/react.png";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="left-side">
        <img className="nav-logo" src={reactlogo} alt="logo" />
        <h1>
          React JS
        </h1>
      </div>
      <div className="right-side">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Product</a>
      </div>
    </nav>
  );
}

// defaut export
// named export
