import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Final Project All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
