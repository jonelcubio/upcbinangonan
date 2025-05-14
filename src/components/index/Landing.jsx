import { Header } from "./Header";
import 'animate.css';

export function Landing() {
  return(
    <>
    <main>
      <div className="landing-con">

        <div className="landing-image-con">
          <img src="https://images.pexels.com/photos/552784/pexels-photo-552784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="landing-img" />
        </div>

        <Header />

        <div className="landing-text-center-con ">
          <div className="landing-text-one">Empowered by the Spirit. Anchored in Truth.</div>
          <div className="landing-text-two">Apostolic. Pentecostal. Unapologetically Jesus Name.</div>

          <button className="landing-text-button">Button</button>
        </div>
    
      </div>
    </main>
    </>
  );
}