import hero from "../../assets/hero.jpeg";

export function Landing() {
  return(
    <main className="landing-main">

      <div className="landing-con-list">

        <div className="landing-image-con">
          <img src={'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className="landing-image" />
        </div>

        <div className="landing-text-con">
          <div className="landing-text-head">Empowered by the Spirit.</div>
          <div className="landing-text-verse">"one Lord, one faith, one baptism; one God and Father of all, who is above all, and through all, and in you all."</div>
          <div className="landing-text-bibleverse">Ephesians 4:5-6 (NKJV)</div>
        </div>


      </div>
    </main>
  );
}