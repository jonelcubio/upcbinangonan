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
          <div className="landing-text-one">Empowered by the Spirit.</div>
          <div className="landing-text-two">"one Lord, one faith, one baptism; one God and Father of all, who is above all, and through all, and in you all."</div>
          <div className="landing-text-three">Ephesians 4:5-6 (NKJV)</div>

          <button className="landing-text-button">Button</button>
        </div>
    
      </div>
    </main>
    </>
  );
}