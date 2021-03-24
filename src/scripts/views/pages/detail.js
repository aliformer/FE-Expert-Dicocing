import API_ENDPOINT from '../../../global/api-endpoints'
import '../components/detail/detail-item'

class Detail {
  constructor (url) {
    this.id = url.id
    this.url = url
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
    element.submitEvent = [this.restaurantElement, this.loadData, this.getData, this.id]
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
      console.log(data.status)
    } else {
      element.renderError(error)
    }
  }

  async getData (id) {
    const endpoint = API_ENDPOINT.DETAIL(id)
    const response = await fetch(endpoint).then(response => response.json()).catch(err => console.error(err))
    return response.restaurant
  }
}

export default Detail
