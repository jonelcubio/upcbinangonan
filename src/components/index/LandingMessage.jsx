import landingtexts from "../../data/landingtext";
import carousel from "../../data/carousel";

export function LandingMessage() {
  return(
    <main className="landing-message-main">
    <div className="landing-message-con">
      <div className="landing-message-title">One God. One Church. One Mission</div>

      <div className="landing-message-flex-list">
        {landingtexts.map((landing) => (
          <div key={landing.id} className="landing-text-item">

          <div className="landing-text-image-con">
            <img src={landing.ico} alt={landing.title} className="landing-text-img" />
          </div>
          <div className="landing-text-title">{landing.title}</div>
          <div className="landing-text-text">{landing.text}</div>

          </div>
        ))}
      </div>

      <div className="landing-message-love-compassion">Love and Compassion</div>
      <div className="landing-message-love-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo assumenda rerum repellendus accusamus quod nisi, doloremque ducimus, alias autem in enim a voluptates illo. Nesciunt laboriosam dolores adipisci exercitationem?</div>

      <div className="landing-message-button-con">
        <button className="landing-message-love-button">READ MORE</button>
      </div>

      <div className="landing-message-images-con">
        {carousel.map(img => (
          <div className="landing-message-img-list" key={img.id}>
          
          <div className="landing-message-img-con">
            <img src={img.image} alt="landing page picture" className="landing-message-img" />
          </div>
          </div>
        ))}
      </div>

      <div className="landing-message-mission-con">
        <div className="landing-message-mission-title">OUR MISSION & VISION</div>
        <div className="landing-message-mission-celebrate">Celebrate with us</div>
        <div className="landing-message-mission-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti, magni aliquam harum quo nostrum cupiditate eaque libero nisi! Cum maiores quidem rem tenetur repudiandae deserunt eum ut iusto iure!</div>

        <div className="landing-message-mission-button-con">
          <button className="landing-message-mission-button">Read More →</button>
        </div>
      </div>
    </div>
    </main>
  );
}