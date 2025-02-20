import Hero from "../sections/Hero.jsx";
import Homepage from '../pages/Homepage'
import Layout from '../Layout'
import WhatIsWitcon from '../sections/WhatIsWitCon';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/Linkedin.png';
import Twitter from '../assets/Twitter.png';
import Facebook from '../assets/Facebook.png';

function Home() {
  return (
    <>
      <Layout>
      
        <div id="main-content" className="main-content">
          <Hero />
          <div className="WhatIsWitCon text-base text-white font-[Pixelify_Sans]">
            <WhatIsWitcon />
          </div>
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

export default Home; 