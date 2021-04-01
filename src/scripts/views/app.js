import Router from '../router/router'
import URLParser from '../utils/url-parser'

class App {
  constructor (appbar, content, footer) {
    this.appbar = appbar
    this.content = content
    this.footer = footer
  }

  renderAppbar () {
    document.body.append(this.appbar)
    document.body.append(this.content)
    document.body.append(this.footer)
  }

  async renderPage () {
    const url = new URLParser(window.location.href)
    const page = Router(url)
    await page.render()
    await page.afterRender()
  }

  async init () {
    this.renderAppbar()
    await this.renderPage()
  }

  reset () {
    this.content.innerHTML = ''
    this.content.style = ''
  }
}

export default App
