import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "../data.js";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.querySelector(".hero");
      const footer = document.querySelector("footer");

      const footerTop = footer
        ? footer.getBoundingClientRect().top + scrollY
        : Infinity;

      // Back-to-top: after 300px, hidden once the footer is in view
      setShowTop(scrollY > 300 && scrollY + window.innerHeight < footerTop);

      // WhatsApp: appears after the hero section
      setShowWhatsapp(hero ? scrollY > hero.offsetHeight : false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp"
        style={{ display: showWhatsapp ? "flex" : "none" }}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <button
        className="floating-btn back-to-top"
        id="backToTop"
        style={{ display: showTop ? "flex" : "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}
