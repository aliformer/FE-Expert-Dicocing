import "./style.css"


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
    }
    
   
    render() 
        {
            
            this.innerHTML = 
            `
            <article id="${this._restaurant.id}" class="card">

                <figure class="image-container"> 
                
                    <img src="${this._restaurant.pictureId}" 
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
    }
customElements.define("restaurant-item", RestaurantElement)