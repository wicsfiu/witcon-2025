import Hero from "./sections/Hero.jsx";
import Homepage from './pages/Homepage'
import Layout from './Layout'
import './navBar.css';
import Countdown from './sections/Countdown.jsx';
import WhatIsWitcon from './sections/WhatIsWitCon';
import FAQs from './sections/FAQs';
import Testimonials from './sections/Testimonials.jsx';
import Instagram from './assets/Instagram.png';
import LinkedIn from './assets/Linkedin.png';
import Twitter from './assets/Twitter.png';
import Facebook from './assets/Facebook.png';

function App() {
  return (
    <>
      <div className="navbar text-base text-white font-[Pixelify_Sans]">
        <div className="nav-content">
          <a href="#main-content" className="nav-link">
            Home
          </a>
          <a href="#faq-section" className="nav-link">
            FAQ
          </a>
          <a
            href="https://airtable.com/appE94lSN4LzuVA8T/pag9913jUMrtO3XF1/form"
            className="nav-link"
          >
            Volunteer
          </a>
          <a href="https://lu.ma/hwyplw5v">
            <button className="get-started-btn">Register</button>
          </a>
        </div>
      </div>

      <Layout>
        <div id="main-content" className="main-content">
          <Hero />
          <div className="Countdown text-base text-white font-[Pixelify_Sans]"> <Countdown/></div>
          <div className="WhatIsWitCon text-base text-white font-[Pixelify_Sans]">
            <WhatIsWitcon />
          </div>
          <div className="Testimonials text-base text-white font-[Pixelify_sans]"> <Testimonials/></div>
          <Homepage />
        </div>
      <div>
      
    </div>
    
      </Layout>

      <div className='footer-container text-base text-white font-[Pixelify_Sans]'>
        <div className="footer-content">
        <a href="" className="footer-link">Stay Up To Date with our News and Notifications</a>
        <div className="social-icons">
        <a href="https://www.instagram.com/wicsfiu/?hl=en"><img className='icon-img' src={Instagram} alt="Instagram" /></a>
        <a href="https://www.linkedin.com/company/wicsatfiu/"><img className='icon-img' src={LinkedIn} alt="LinkedIn" /></a>
        <a href="https://x.com/WICSFIU"><img className='icon-img' src={Twitter} alt="Twitter" /></a>
        <a href="https://www.facebook.com/wicysfiu/"><img className='icon-img' src={Facebook} alt="Facebook" /></a>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
