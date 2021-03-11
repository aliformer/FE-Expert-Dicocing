import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import NotFound from '../views/pages/notfound'
import Favorite from '../views/pages/favorite'

const Router = (url) => {
  switch (url.primaryHash) {
    case '/':
      return new Home(url)
    case '/detail':
      return new Detail(url)
    case '/favorite' :
      return new Favorite(url)
    default:
      return new NotFound(url)
  }
}

export default Router
