import API_ENDPOINT from '../../../global/api-endpoints'
import FavoriteRestaurantIdb from '../../../data/idb'
import '../components/detail/detail-item'


class Detail {
  constructor (url) {
    this.id = url.id    
    this.content = document.querySelector('main')
  }

  preRender () {
    this.restaurantElement = document.createElement('detail-item')
  }

  async render () {
    this.preRender()
    this.spinner()
    this.content.append(this.restaurantElement)    
  }

  async afterRender () {
    await this.dataLoaded()
    const element = document.querySelector('review-form')
    element.submitEvent = [element, this.loadData, this.getData, this.id ]
  }

  spinner () {
    this.restaurantElement.innerHTML = '<div class="loader"></div>'
  }

  async dataLoaded () {
    const data = await this.getData(this.id)
    this.loadData(data, 'tidak dapat memuat data', this.restaurantElement)
  }

  async loadData (data, error, element) {
    if (data) {
      element.restaurant = await data
    } else {
      element.renderError(error)
    }
  }

  async getData (id) {    
    const response = await FavoriteRestaurantIdb.getRestaurant(id)
    
    return response.restaurant
  }

  
}

export default Detail
