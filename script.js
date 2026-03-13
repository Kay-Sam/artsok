const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");
const modalContact = document.getElementById("modalContact");

function openModal(src, artistName, contactLink) {
  modal.style.display = "flex";
  modalImg.src = src;
  modalArtist.textContent = `By ${artistName}`;
  modalContact.href = contactLink;
}

function closeModal() {
  modal.style.display = "none";
}

const backToTop = document.getElementById("backToTop");
const whatsappBtn = document.querySelector(".floating-btn.whatsapp");
const heroSection = document.querySelector(".hero");
const footer = document.querySelector("footer"); // make sure your footer has a <footer> tag

window.onscroll = function() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const footerTop = footer.getBoundingClientRect().top + scrollY;

  // Back to top button
  if(scrollY > 300 && scrollY + windowHeight < footerTop){
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }

  // WhatsApp button: appear after hero section
  if(heroSection && scrollY > heroSection.offsetHeight){
    whatsappBtn.style.display = "flex";
  } else {
    whatsappBtn.style.display = "none";
  }
};

// Scroll to top functionality
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});