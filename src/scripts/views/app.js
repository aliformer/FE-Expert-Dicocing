import Router from '../router/router'
import URLParser from '../utils/index'

class App {
  constructor (appbar, content, footer) {
    this.appbar = appbar
    this.content = content
    this.footer = footer
  }

  async renderAppbar () {
    await document.body.append(this.appbar)
    await document.body.append(this.content)
    await document.body.append(this.footer)
  }

  async renderPage () {
    const url = await new URLParser(window.location.href)
    const page = Router(url)
    await page.render()  
    await page.afterRender()   
  }

  async init () {
    await this.renderAppbar()
    await this.renderPage()
  }

  reset () {
    this.content.innerHTML = ''
    this.content.style = ''
  }
}

export default App
