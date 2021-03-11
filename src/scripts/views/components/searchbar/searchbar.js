/* eslint-disable no-useless-constructor */
import API_ENDPOINT from '../../../../global/api-endpoints'
import './style.css'

class Searchbar extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.render()
  }

  set clickEvent ([element, loadData]) {
    this._clickEvent = async () => {      
      this._query = this.querySelector('.searchbar').value
      const result = await this.searchRestaurant(this._query)      
      if (result) {        
        await loadData(result, 'failed to show resto', element)
      } else {
        this.notFound(element, this._query)
      }
    }

    this.render()
  }

  notFound (element, query) {
    element.innerHTML = `<p>tidak ada restoran dengan kata kunci <b>${query}</b></p>`
  }
  render () {
    this.innerHTML = `        
        <label class="container-search">        
        <input type="search" class="searchbar" placeholder="Search..."><button><i class="material-icons md-18">search</i></button>
        </label>        
        `

    this.querySelector('button').addEventListener('click', this._clickEvent)
  }

  async searchRestaurant (query) {
    const endpoint = API_ENDPOINT.SEARCH(query)
    const response = await fetch(endpoint).then((response) => response.json()).then(data => data.restaurants)
    if (response.length === 0) {
      return false
    }
    return response
  }
}
customElements.define('search-bar', Searchbar)
