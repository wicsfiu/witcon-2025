import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../navBar.css"

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq-section") {
      const faqElement = document.getElementById("faq-section");
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleFAQClick = (e) => {
    e.preventDefault();
    const faqElement = document.getElementById("faq-section");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar text-base text-white font-[Pixelify_Sans]">
      <div className="nav-content">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/team" className="nav-link">Team</Link>
        <a href to="/faq-section" className="nav-link"onClick={handleFAQClick} >FAQ</a>
        <a href="https://airtable.com/appE94lSN4LzuVA8T/pag9913jUMrtO3XF1/form" className="nav-link">Volunteer</a>
        <a href="https://lu.ma/hwyplw5v" className="nav-link-button">
          <button className="get-started-btn">Register</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;