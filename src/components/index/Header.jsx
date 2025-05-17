import logo from "../../assets/logo.png";
import whiteLogo from "../../assets/white.png";

export function Header() {
  return(
    <main>
      <div className="header-con absolute top-0 my-[2%] mx-[8%]">

        <div className="header-img-con">
          <img src={whiteLogo} className="header-image" />
        </div>
      </div>

      <div className="absolute top-0 my-[2%] py-[15px] mx-[30%] w-[380px]"></div>

      <div className="header-navigational-link-con">
        <div className="header-navigational-link">Home</div>
        <div className="header-navigational-link">About</div>
        <div className="header-navigational-link">Services</div>
        <div className="header-navigational-link">Contact</div>
        <button className="header-navigational-button">Button</button>
      </div>
    </main>
  );
}