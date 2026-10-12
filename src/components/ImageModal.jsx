import { useEffect } from "react";
import { WHATSAPP_LINK } from "../data.js";

export default function ImageModal({ art, onClose }) {
  // Close on Escape + lock page scroll while open
  useEffect(() => {
    if (!art) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [art, onClose]);

  return (
    <div
      id="imageModal"
      className="modal"
      style={{ display: art ? "flex" : "none" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <span className="close" onClick={onClose}>&times;</span>

      {art && (
        <>
          <img id="modalImg" src={art.src} alt={art.alt} />
          <div id="modalInfo" className="modal-info">
            <h4 id="modalTitle">{art.title}</h4>
            <p id="modalArtist">By {art.artist}</p>
            <a
              id="modalContact"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <i className="fa-brands fa-whatsapp"></i> Message
            </a>
          </div>
        </>
      )}
    </div>
  );
}
