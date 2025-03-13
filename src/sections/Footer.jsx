import React from "react";
import "../Footer.css"; // Ensure this CSS file exists
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <div className="footer-container text-base text-white font-[Pixelify_Sans]">
      <div className="footer-content">
        <a href="#" className="footer-link">
          Stay Up To Date with our News and Notifications
        </a>
        <div className="social-icons">
          <a href="https://www.instagram.com/wicsfiu/?hl=en">
            <img className="icon-img" src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/wicsatfiu/">
            <img className="icon-img" src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://x.com/WICSFIU">
            <img className="icon-img" src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
