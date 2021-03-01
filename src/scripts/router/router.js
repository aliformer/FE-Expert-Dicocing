
const url = require('url')
import Home from '../views/pages/home'
// const Favorite = require('../view/page')
// const Detail = require('../view/detail')
// const NotFound = require('../')


const Router = (url) =>  {
    switch (url.pathname) {
        case '/': 
        return new Home(url)        
        // case '/detail':
        // return Detail(url)        
        // case '/favorite' :
        // return Favorite(url)        
        default :
        return 'notfound'

    }
}

export default Router