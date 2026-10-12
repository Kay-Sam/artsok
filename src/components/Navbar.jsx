import { useState } from "react";
import { CONTACT_LINK, SUBMIT_LINK } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">Artsok</div>

        <nav id="navMenu" className={open ? "active" : ""}>
          <a href="#about" onClick={close}>About</a>
          <a href="#works" onClick={close}>How it Works</a>
          <a href="#portfolio" onClick={close}>Portfolio</a>
          <a href={CONTACT_LINK} onClick={close}>Contact</a>
          <a className="btn primary submit-btn" href={SUBMIT_LINK} onClick={close}>
            Submit Artwork
          </a>
        </nav>

        <div
          className="hamburger"
          id="hamburger"
          onClick={() => setOpen((o) => !o)}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
