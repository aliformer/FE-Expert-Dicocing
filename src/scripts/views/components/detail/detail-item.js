/* eslint-disable no-useless-constructor */
import CONFIG from '../../../../global/config'
import '../review/review-list'
import '../review/review-form'
import '../like-button/like-button'
import './style.css'
import 'lazysizes'

class detailRestaurant extends HTMLElement {
  constructor () {
    super()
  }

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this._menu = this._restaurant.menus
    this._drinks = this._menu.drinks
    this._foods = this._menu.foods
    this._category = this._restaurant.categories
    this._reviews = this._restaurant.customerReviews
    this.render()
    this.querySelector('like-button').render = restaurant
    this.querySelector('review-list').reviews = this._reviews
  }

  render () {
    let foods = ''
    let drinks = ''
    let categories = ''
    this._drinks.forEach((drink) => {
      drinks += `<li>${drink.name}</li>`
    })

    this._foods.forEach((food) => {
      foods += `<li>${food.name}</li>`
    })

    this._category.forEach(category => {
      categories += `<label class="tags" >${category.name}</label>`
    })
    this.innerHTML = `
        
          <article id="konten/" class="container-restaurant">

          <figure class="image-container-detail" id="restaurant-image-detail">
              
              <img class="lazyload image-card-detail" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM}${this._restaurant.pictureId}" width:"500px"
                  alt="gambar ${this._restaurant.name}">
                  <like-button></like-button>
          </figure>

          <h3 class="title-detail">
              <a href="#/detail/${this._restaurant.id}" name="#konten">${this._restaurant.name}</a>
          </h3>

          <h4 class="subtitle-detail">
              <i class="material-icons md-18">place</i>
              ${this._restaurant.address}, ${this._restaurant.city}
              
          </h4>

          <p class="rating-detail">
          Rating 
              <i class="material-icons md-18">star</i>
              ${this._restaurant.rating}
          </p>
          <section class="menu">
          <table>
              <thead>
                  <th>
                      <h4>Minuman</h4>
                  </th>
                  <th>
                      <h4>Makanan</h4>
                  </th>
              </thead>
              <tbody>
                <tr>
                  <td><ul>${drinks}</ul></td>
                  <td><ul>${foods}</ul></td>
                </tr>
              </tbody>
              
          </table>
          </section>
          
          </article>
          <article class="container-info">
            <section class='container-description'>
              <section class="description-detail" id="description">
                  <h4 class="description-title">Deskripsi restoran</h4>
                  <p>${this._restaurant.description}</p>
              </section>
              <section class="category">              
              <strong>Tags</strong>${categories}              
              </section>
            </section>

            <review-form>
            </review-form>
            <review-list>
            </review-list>
              
          </article>
        `
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
    this.style.justifyContent = 'center'
    this.style.alignItems = 'center'
  }
}
customElements.define('detail-item', detailRestaurant)
