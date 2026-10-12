import { aboutFeatures } from "../data.js";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-text">
          <span className="badge">About Artsok</span>
          <h2>Where Creativity Meets Opportunity</h2>

          <p className="about-desc">
            Artsok is a platform designed to help creative talents showcase
            their masterpieces to the world. Artists, designers, and digital
            creators can display their work while clients and recruiters
            discover amazing talent.
          </p>

          <div className="about-features">
            {aboutFeatures.map((f) => (
              <div className="feature" key={f.title}>
                <i className={`fa-solid ${f.icon}`}></i>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image">
          <img src="/img/about-art.jpg" alt="Artwork" />
        </div>
      </div>
    </section>
  );
}
