import instagramlogo from "../assets/instagram.png";
import twitterlogo from "../assets/twitter.png";
import facebooklogo from "../assets/facebook.png";
import githublogo from "../assets/github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <div className="footer-logo">
          <img className="icon" src={instagramlogo} alt="" />
          <img className="icon" src={twitterlogo} alt="" />
          <img className="icon" src={facebooklogo} alt="" />
          <img className="icon" src={githublogo} alt="" />
        </div>
        <div className="footer-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
        </div>
        <div className="footer-copyright">
          <p>© 2023 All right are reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
