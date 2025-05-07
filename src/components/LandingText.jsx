import landingtexts from "../data/landingtext";
import carousels from "../data/carousel";
import arrow from "../assets/arrow.svg";

export function LandingText() {
  return(
    <main className="landing-text-section">
      <div className="landing-tagline church">A church that's family</div>
      <div className="landing-text-tagline">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br></br>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>

      <div className="landing-grid-con">
      {landingtexts.map(text => (
        <div className="landing-grid-one" key={text.id}>
          <div className="landing-grid-img-con">
          <img src={text.ico} alt={text.title} className="landing-grid-img" />

          <div className="landing-grid-title">{text.title}</div>
          <div className="landing-grid-text">{text.text}</div>
          <div className="landing-grid-line"></div>
        </div>
      </div>
      ))}
      </div>

{/* About section intro */ }
      <div className="landing-tagline love">love and compassion</div>
      <div className="landing-text-tagline">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>

      <div className="landing-text-flex">
        <button className="landing-text-btn">READ MORE</button>
      </div>

      
      <div className="landing-text-carousel-con">
        {carousels.map(caro => (
        <div className="landing-text-key" key={caro.id}>

          <div className="landing-text-img">
            <img src={caro.image}  className="landing-text-image" />
          </div>

        </div>
      ))}
      </div>
      
      {/* Mission Vision section intro */ }
      <div className="landing-mission-div">
      <div className="landing-text-mission-con">our mission & vision</div>
      <div className="landing-tagline celebrate">celebrate with us</div>
      <div className="landing-tagline-celebrate-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.<br></br> Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>

      <div className="landing-tagline-readmore-con">
        <div className="landing-tagline-readmore">Read More</div>
        <img src={arrow} className="landing-tagline-arrow" />
      </div>
      </div>


      {/* Watch & Listen section intro */ }
      <div className="landing-watch-listen-con">
        <div className="landing-text-watch-con">watch and listen</div>
        <div className="landing-text-benefits benefits">the benefits of joining our church</div>
        <div className="landing-text-watch-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.<br></br> Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
      </div>
    </main>
  );
}