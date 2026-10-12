import { heroImages, SUBMIT_LINK } from "../data.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <h1>
          A place to showcase your <span>masterpiece</span>
        </h1>

        <p>
          Artists share their work, clients discover talent, and creativity
          gets the attention it deserves.
        </p>

        <div className="hero-buttons">
          <a className="btn primary submit-btn" href={SUBMIT_LINK}>Get Started</a>
          <a className="btn secondary" href="#portfolio">Explore Art</a>
        </div>

        <div className="floating-images">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              className={`fimg f${i + 1}`}
              alt={`Art ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
