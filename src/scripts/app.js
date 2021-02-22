const ROUTER = require('../../router/router')
const {URL} = require('url')


class App {
    constructor({content}){        
    this.content = content
    }
    async renderPage() {
        const url = ; new URL(window.location.href).pathname
        const page = ROUTER[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
      }
    }
}