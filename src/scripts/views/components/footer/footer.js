
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
        <p> Copyright © 2020 - Hunger Apps</p>
        <p class="footer-subs"> build with love &#10084; by &nbsp; <a href=https://github.com/aliformer class="github"> Aliformer </a></p>
        </footer> 
        `
  }
}

customElements.define('footer-app', FooterApp)
