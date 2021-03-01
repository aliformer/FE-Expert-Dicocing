import 'regenerator-runtime' /* for async await transpile */
import './views/components/appbar/appbar'
import '../styles/main.css'
import App from './views/app'

const app = new App(   
  document.createElement('app-bar'),
  document.createElement('main')
)

window.addEventListener('load', () => {
  app.init()
})
window.addEventListener('hashchange', () => {
  app.init()
})