import { SUBMIT_LINK } from "../data.js";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to get discovered for your creativity?</h2>
        <p>
          Submit your artwork and let clients and recruiters connect with you
          directly.
        </p>
        <a className="btn primary" href={SUBMIT_LINK}>Submit Your Artwork</a>
      </div>
    </section>
  );
}
