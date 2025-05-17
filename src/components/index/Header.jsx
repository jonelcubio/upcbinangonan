import logo from "../../assets/logo.png";
import whiteLogo from "../../assets/white.png";
import fb from "../../assets/fb.png";

export function Header() {
  return(
    <main className="header-main">
      <div className="header-con-list">

        <div className="header-brand-con">
          <img src={whiteLogo} className="header-brand-img" />
        </div>

        <div className="header-nav-con">
          <div className="header-nav">HOME</div>
          <div className="header-nav">ABOUT US</div>
          <div className="header-nav">PREACHING</div>
          <div className="header-nav">BLOG</div>
        </div>

        <div className="header-space"></div>

        <div className="header-button-con">
          <button className="header-button">
            <img src={fb} className="header-button-link" />
          </button>
        </div>
      </div>
    </main>
  );
}