import { Cards } from "./cards.js";
import { Icones } from "./Icones.js";
import { Footer } from "./footer.js";
window.onload = () => {
  const animaCards = new Cards();
  const icones = new Icones();
  const footer = new Footer();
  footer.efeitoOnda();
  icones.animaIcones();
  document.addEventListener("scroll", animaCards.scrollCards.bind(animaCards));
};
