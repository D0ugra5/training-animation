class Cards {
  constructor() {
    this.getPositionTips = document.getElementById("section-dicas");
    this.getCardTipsEsq = document.querySelector(".card-esq");
    this.getCardTipsDir = document.querySelector(".card-dir");
  }
  teste() {
    console.log("scroll");
  }

  scrollCards() {
    window.requestAnimationFrame(this.calculoScroll.bind(this));
  }

  calculoScroll() {
    const posicao = this.getPositionTips.getBoundingClientRect()["y"];

    if (posicao >= 25) {
      // let newPosition = 25 - Math.log(posicao) * 3;
      this.getCardTipsEsq.style.transform = `translate(${-posicao + 25}%)`;
      this.getCardTipsDir.style.transform = `translate(${posicao - 25}%)`;
    }
  }
}

export { Cards };
