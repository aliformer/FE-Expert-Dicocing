class URLParser extends URL {
  constructor (url) {
    super(url)
    this.primaryHash = (this.hash === '') ? '/' : `/${this.hash.split('/')[1]}`
    this.id = this.getId()
  }

  getId () {
    if (this.hash.includes('detail')) {
      if (this.hash.split('/')[2]) {
        return this.hash.split('/')[2]
      } else {
        return undefined
      }
    } else {
      return undefined
    }
  }
}
export default URLParser
