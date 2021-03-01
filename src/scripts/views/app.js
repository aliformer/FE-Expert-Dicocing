import Router from '../router/router'

class App {
    constructor(appbar,content){        
    this.appbar = appbar
    this.content = content
    }
    async renderAppbar(){
      await document.body.append(this.appbar)
      await document.body.append(this.content)
    } 
    async renderPage() {
        const url = await new URL(window.location.href)
        const page = Router(url);        
        await page.render();   
        await page.loadData()     
      }
    async init(){
      await this.renderAppbar()
      await this.renderPage()
    }
  }

export default App