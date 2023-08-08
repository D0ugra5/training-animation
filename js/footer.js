class Footer {
  constructor() {
    this.filtroTurbulencia = document.getElementById("filtro-turbulencia");
  }
  efeitoOnda() {
    TweenMax.to(this.filtroTurbulencia, 20, {
      repeat: -1,
      yoyo: true,
      attr: {
        baseFrequency: 0.03,
      },
    });
  }
}

export { Footer };
