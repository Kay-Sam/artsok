import { SUBMIT_LINK } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© 2026 Artsok. All rights reserved.</p>

        <div className="socials">
          <a href={SUBMIT_LINK} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.behance.net/gallery/245469223/Arthive-is-a-social-network-and-marketplace-for-artists"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-behance"></i>
          </a>
          <a
            href="https://dribbble.com/shots/27095545-Artist"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-dribbble"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
