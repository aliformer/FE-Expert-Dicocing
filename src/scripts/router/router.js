
const url = require('url')

const Home = require('../views/page')
const Favorite = require('../view/page')
const Detail = require('../view/detail')


const ROUTER = {
    '/' : Home,
    '/detail/:id' : Detail,
    '/favorite' : Favorite
}

export default Router 