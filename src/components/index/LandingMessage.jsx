import landingtexts from "../../data/landingtext";

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
    </div>
    </main>
  );
}