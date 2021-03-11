class NotFound {
  constructor (url) {
    this.url = url
    this.content = document.querySelector('main')
  }

  async render () {
    this.noPage = document.createElement('div')
    this.content()
  }

  async loadData () {
    this.noPage.innerHTML =
        `
        <figure>
            <img src = {}>

        </figure>
        <h3> Page is not found <h3>
        `
  }
}

export default NotFound
