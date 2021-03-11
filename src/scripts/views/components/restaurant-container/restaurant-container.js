/* eslint-disable accessor-pairs */
/* eslint-disable no-useless-constructor */
import '../restaurant-element/restaurant-element.js'
import './style.css'

class RestaurantContainer extends HTMLElement {
  constructor () {
    super()
  }

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this._headerTitle = document.createElement('h2')
    this._headerTitle.innerText = `Daftar Restoran`
    this.render()
  }

  renderError (message) {
    this.innerHTML = `
    <h3 class="error-message" >${message}<h3> 
    <figure>
    <img src='images/logo/logo.svg' style="display:block; margin: 10px;">
    </figure>
    `
    this.style.display = 'flex'
    this.style.flexDirection = 'column'
    this.style.justifyContent ='center'
    this.style.alignItems = 'center'
  }

  render () {
    if(this.parentNode.querySelector('h2')){      
    }
    else{
      this.parentNode.insertBefore(this._headerTitle, this)
    }
    for (const restaurant of this._restaurant) {
      const restaurantListElement = document.createElement('restaurant-item')
      restaurantListElement.restaurant = restaurant
      this.appendChild(restaurantListElement)    
    }
    console.log(this._restaurant)
  }
}
customElements.define('restaurant-container', RestaurantContainer)
