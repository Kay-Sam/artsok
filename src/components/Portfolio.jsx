import { artworks, WHATSAPP_LINK } from "../data.js";

export default function Portfolio({ onSelect }) {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="portfolio-grid">
          {artworks.map((art) => (
            <div className="art-card" key={art.id}>
              <img
                src={art.src}
                alt={art.alt}
                onClick={() => onSelect(art)}
                style={{ cursor: "pointer" }}
              />
              <div className="art-info">
                <h4>{art.title}</h4>
                <p>By {art.artist}</p>
                <a
                  href={WHATSAPP_LINK}
                  className="contact-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i> Message
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
