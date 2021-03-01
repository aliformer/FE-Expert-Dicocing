import "./style.css"
import '../searchbar/searchbar'

class Appbar extends HTMLElement
{
    constructor()
    {
        super();
    }
    
    async connectedCallback()
    {
        await this.render();        
        await this.clickEvent(0)
    }

    async clickEvent()
    {
     const menuButtonElement =  await document.querySelector('.menu-button');    
     const main =  await document.querySelector('main');      
     const sidebar = await document.querySelector('.sidebar');
     
     menuButtonElement.addEventListener('click', (event) => 
     {
        sidebar.classList.toggle('active');
        event.stopPropagation();
     })

     main.addEventListener('click', (event) =>
     {        
            sidebar.classList.remove('active');   
            event.stopPropagation();            
     })
    }
    render()
    {
        this.innerHTML = 
        `
        <nav class="navbar">        
            <div class="logo-wrapper">
                <img src="/images/logo/logo.png" alt="">
            </div>            
            <search-bar></search-bar>
            <button class="menu-button" tabindex="0"><i class="material-icons md-36">menu</i></button>
            <ul>
                <li><a href="#" >Home</a></li>
                <li><a href="#" >Favorite</a></li>
                <li><a href="#" >Category</a></li>
                <li><a href="https://github.com/aliformer" >About Us</a></li>
            </ul>
            
        </nav>
        <aside class="sidebar">
             <search-bar></search-bar>
            <ul class="sidebar-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">About Us</a></li>
            </ul>

        </aside>
        ` 
    }
   
}

customElements.define('app-bar', Appbar);