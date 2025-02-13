import Homepage from './pages/Homepage'
import Layout from './Layout'
import './navBar.css';
import WhatIsWitcon from './sections/WhatIsWitCon';
import FAQs from './sections/FAQs';
import Hero from './sections/Hero.jsx';

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

    </>
  )
}

export default App
