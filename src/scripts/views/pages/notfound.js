class NotFound {
  constructor (url) {
    this.url = url
    this.content = document.querySelector('main')
  }

  async render () {
    this.noPage = document.createElement('div')
    this.loadData()
    this.content.appendChild(this.noPage)
  }

  async loadData () {
    this.noPage.innerHTML =
        `
        <figure style="display:flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 100px;">
            <img src ='images/not-found/not-found.png' width="50%">
        </figure>        
        `
  }
}

export default NotFound
