import "./style.css"
import CONFIG from '../../../../global/config'

class RestaurantElement extends HTMLElement 
    {
    constructor() 
    {
        super();
    }

    set restaurant(restaurant)
    {
        this._restaurant = restaurant;
        this.render();        
        this.renderImage()
    }
    render() 
        {
            
            this.innerHTML = 
            `
            <article id="${this._restaurant.id}" class="card">

                <figure class="image-container" id="restaurant-image"> 
                
                    <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM}${this._restaurant.pictureId}" 
                    width:"500px" class="image-card" 
                    alt ="gambar ${this._restaurant.name}">

                </figure>

                <h3 class="title-card">
                    <a href="#">${this._restaurant.name}</a>
                </h3>

                <h4 class="subtitle-card">
                    <i class="material-icons md-18">place</i>
                    ${this._restaurant.city}
                </h4>

                <p class="rating">
                    <i class="material-icons md-18">star</i>
                    ${this._restaurant.rating}
                </p>

                <p class="description-card" id="description">
                    ${this._restaurant.description.substr(0,100)}
                </p>

            </article>
            `
        }
    async renderImage(){
        try {
           return  document.querySelector('.restaurant-image').src =  `${CONFIG.BASE_IMAGE_URL_MEDIUM}${this._restaurant.pictureId}`
        }
        catch (err){
          return err
        }
    }

    async renderError(message) {
        this.innerHTML = `<h3>${message}<h3>`
    }
    
    }
customElements.define("restaurant-item", RestaurantElement)