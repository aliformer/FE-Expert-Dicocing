
class FooterApp extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML =
        `
        <footer>
        <p>Copyright © 2020 - Hunger Apps</p>
        </footer> 
        `
  }
}

customElements.define('footer-app', FooterApp)
