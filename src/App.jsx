import Homepage from './pages/Homepage'
import Layout from './Layout'
import './navBar.css';
import WhatIsWitcon from './sections/WhatIsWitCon';
import FAQs from './sections/FAQs';
import Hero from './sections/Hero.jsx';
import Instagram from './assets/Instagram.png';
import LinkedIn from './assets/Linkedin.png';
import Twitter from './assets/Twitter.png';
import Facebook from './assets/Facebook.png';

function App() {
  return (
    <>
    
    <div className="navbar text-base text-white font-[Pixelify_Sans]">
          <div className="nav-content">
            <a href="" className="nav-link">Home</a>
            <a href="team" className="nav-link">Team</a>
            <a href="https://airtable.com/appE94lSN4LzuVA8T/pag0p7hl3Wy91aCiN/form" className="nav-link">Contact</a>
            <a href="https://lu.ma/hwyplw5v">
            <button className="get-started-btn">Get Started</button>
            </a>
          </div>
      </div>
      
      <Layout>
      <div>
      <Hero></Hero>
    </div>

      <div className="WhatIsWitCon text-base text-white font-[Pixelify_Sans]">
        <WhatIsWitcon></WhatIsWitcon>
      </div>
      
      <div>
        <FAQs></FAQs>
      </div>

        <Homepage></Homepage>
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
  )
}

export default App
