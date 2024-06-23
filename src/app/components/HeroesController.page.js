class HeroesControllerPage {
  constructor(screen) {
    this.screen = screen
  }

  findPrevButton() {
    return this.screen.findByRole('button', { name: /previous/i })
  }

  findNextButton() {
    return this.screen.findByRole('button', { name: /next/i })
  }
}

export default HeroesControllerPage
