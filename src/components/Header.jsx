import logo from "../assets/logo.png";

export function Header() {
  return(
    <main className="header-section">
      <div className="header-divitions">

        <div className="header-brand-img">

          <div className="header-img">
            <a href=""><img src={logo} alt="UPC Binangonan" className="header-imagefile" /> </a>
            <div className="header-brand-name">UPC Binangonan</div>
          </div>

          <div className="header-links-navigation">
            <div className="header-links">HOME</div>
            <div className="header-links">ABOUT US</div>
            <div className="header-links">PREACHING</div>
            <div className="header-links">BLOG</div>
          </div>

          <button className="header-link-button">CONTACT US</button>
        </div>
      </div>
    </main>
  );
}