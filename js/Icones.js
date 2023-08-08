class Icones {
  constructor() {
    this.listIcones = document.querySelectorAll(".icone");
  }

  animaIcones() {
    TweenMax.to(this.listIcones, 0.5, { scale: 0.95, repeat: -1, yoyo: true });
  }
}

export { Icones };
