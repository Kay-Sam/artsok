export const WHATSAPP_NUMBER = "2348122269422";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SUBMIT_LINK = `${WHATSAPP_LINK}?text=${encodeURIComponent(
  "Hello, I would like to submit my artwork."
)}`;
export const CONTACT_LINK = `${WHATSAPP_LINK}?text=${encodeURIComponent(
  "Hello, I am from your website"
)}`;

// Images live in /public/img — add a new object here to add a new card.
export const artworks = [
  { id: 1, src: "/img/art1.jpg", title: "Creative Wall Design", artist: "John", alt: "Creative Wall Design" },
  { id: 2, src: "/img/art2.jpg", title: "Concept Art", artist: "Juliet", alt: "Concept Art" },
  { id: 3, src: "/img/art12.jpg", title: "Digital Illustration", artist: "Smith", alt: "Digital Illustration" },
  { id: 4, src: "/img/art3.jpg", title: "Portrait Art", artist: "Precious", alt: "Portrait Art" },
  { id: 5, src: "/img/art4.jpg", title: "Portrait Art", artist: "Mary", alt: "Portrait Art" },
  { id: 6, src: "/img/art5.jpg", title: "Mural/Wall Art Design", artist: "Joseph", alt: "Mural Art" },
  { id: 7, src: "/img/art6.jpg", title: "Portrait Art", artist: "Kofi", alt: "Portrait Art" },
  { id: 8, src: "/img/art7.jpg", title: "Portrait Art", artist: "Bello", alt: "Portrait Art" },
  { id: 9, src: "/img/art 8.jpg", title: "Digital Illustration", artist: "Rowan Atkinson", alt: "Digital Illustration" },
  { id: 10, src: "/img/art 9.jpg", title: "Traditional Painting / Drawing", artist: "Russo", alt: "Traditional Painting" },
  { id: 11, src: "/img/art10.jpg", title: "Portrait Art", artist: "Eliana", alt: "Portrait Art" },
  { id: 12, src: "/img/art11.jpg", title: "Canvas Painting", artist: "Moreno", alt: "Canvas Painting" },
];

export const heroImages = [
  "/img/0c2fc3bf1802d2044b480e7bd2cf28d4.jpg",
  "/img/712c00b202016d3ce1cd81379d2df609.jpg",
  "/img/73ae702959258eb2a9018c0a1cf45a48.jpg",
  "/img/bd9387bef57978d2eec18719e97a4621.jpg",
  "/img/hero1.jpg",
];

export const aboutFeatures = [
  { icon: "fa-palette", title: "Showcase Masterpieces", text: "Display your best creative works." },
  { icon: "fa-user-tie", title: "Get Discovered", text: "Recruiters and clients find your talent." },
  { icon: "fa-handshake", title: "Connect with Clients", text: "Collaborate and get new opportunities." },
];

export const steps = [
  { number: "01", icon: "fa-phone", title: "Contact Admin", text: "Send your artwork to be reviewed." },
  { number: "02", icon: "fa-upload", title: "Get Featured", text: "Your project gets uploaded to Artsok." },
  { number: "03", icon: "fa-eye", title: "Get Discovered", text: "Clients and recruiters discover your work." },
];
