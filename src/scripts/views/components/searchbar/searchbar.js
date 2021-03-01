import './style.css'
class Searchbar extends HTMLElement {
    constructor() {
        super();        
    }
    connectedCallback(){
        this.render()
        this.searchEvent()
    }
    render(){
        this.innerHTML = `
        <div class="container-search"> 
        <input type="search" class="searchbar" placeholder="Search"><button><i class="material-icons md-18">search</i></button>
        </div>
        `
    }
    searchEvent(){
        const searchBar = document.getElementsByClassName('searchbar')
        searchBar.forEach(element => {
            element.addEventListener('click', (event) => {
                
                event.stopPropagation()
            })
        });
    }
}
customElements.define("search-bar", Searchbar)