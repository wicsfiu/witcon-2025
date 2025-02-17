import Homepage from "./pages/Homepage";
import Layout from "./Layout";
import "./navBar.css";
import WhatIsWitcon from "./sections/WhatIsWitCon";

import Hero from "./sections/Hero.jsx";

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
          <div className="WhatIsWitCon text-base text-white font-[Pixelify_Sans]">
            <WhatIsWitcon />
          </div>
          <Homepage />
        </div>
      </Layout>
    </>
  );
}

export default App;
