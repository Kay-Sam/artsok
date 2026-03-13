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