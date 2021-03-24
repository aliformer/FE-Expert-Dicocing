import './style.css'
import '../searchbar/searchbar'
class Hero extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `

        <section class="hero">

            <h1 class="hero-title">
                Hunger App
            </h1>

            <p class="hero-subtitle">
                Cari tahu dan temukan tempat makan yang unik di sekitarmu
            </p>            
        </section>
        `
  }
}

customElements.define('hero-app', Hero)
