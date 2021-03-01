import "../restaurant-element/restaurant-element.js"
import "./style.css"

class RestaurantContainer extends HTMLElement {
    constructor() {
        super();
    }
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }
    render() {

        this._restaurant.forEach(restaurant => {

            const restaurantListElement = document.createElement("restaurant-item");
            restaurantListElement.restaurant = restaurant;
            this.appendChild(restaurantListElement);


        })


    }

}
customElements.define("restaurant-container", RestaurantContainer)