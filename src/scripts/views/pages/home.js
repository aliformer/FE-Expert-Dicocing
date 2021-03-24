import API_ENDPOINT from '../../../global/api-endpoints'
import '../components/restaurant-container/restaurant-container'
import '../components/hero/hero'

class Home {
  constructor (url) {
    this.url = url
    this._data = this.getData()
    this.content = document.querySelector('main')
    this.hero = document.createElement('hero-app')
    this.restaurantElement = document.createElement('restaurant-container')
    this.searchBar = document.createElement('search-bar')
    this.appBar = document.querySelector('app-bar')
  }

  async render () {
    await this.content.append(this.hero)
    await this.content.append(this.searchBar)
    this.spinner()
    await this.content.append(this.restaurantElement)
  }

  async afterRender () {
    this.dataLoaded()
    const searchBar = document.querySelector('search-bar')
    searchBar.clickEvent = [this.restaurantElement, this.loadData]
  }

  spinner () {
    this.restaurantElement.innerHTML = '<div class="loader"></div>'
  }

  async dataLoaded () {
    const data = await this.getData()
    this.loadData(data, 'Tidak dapat memuat data', this.restaurantElement)
  }

  async loadData (data, error, element) {
    if (data) {
      element.innerHTML = ''
      element.restaurant = await data
    } else {
      this.restaurantElement.renderError(error)
    }
  }

  async getData () {
    const endpoint = API_ENDPOINT.LIST
    const response = await fetch(endpoint).then(response => response.json()).then(data => data.restaurants).catch(err => console.error(err))
    return response
  }
}

export default Home
