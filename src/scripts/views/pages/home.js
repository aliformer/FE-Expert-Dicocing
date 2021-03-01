import API_ENDPOINT from '../../../global/api-endpoints'
import '../components/restaurantContainer/restaurant-container'
import '../components/hero/hero'

class Home {
    constructor(url) {
        this.url = url    
        this._data = this.getData()
        this.content = document.querySelector('main')
    }
    async render(){
        this.hero = document.createElement('hero-app')
        this.restaurantElement =  document.createElement('restaurant-container')        
        this.content.append(this.hero)
        this.content.append(this.restaurantElement)        
        
    }
    async loadData(){
        if (this._data){
            this.restaurantElement.restaurant = await this._data        
        }
        else {
            this.restaurantElement.renderError('failed to load')
        }
        
    }

    async getData(){
        const endpoint = API_ENDPOINT.LIST
        const response = await fetch(endpoint).then(response => response.json()).then( data => data.restaurants)        
        return response
    }
}

export default Home