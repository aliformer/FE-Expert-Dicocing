const {URL} = require('url')

class UrlParser extends URL {
  constructor(url){    
    super(url);      
  }
  cleanPath(){
    this._trimmed= this.hash.slice(1)
    return this._trimmed

  }
  getIdentifier(){
   return this.cleanPath().slice([this.cleanPath().length -1])
  }

  
}


const splitted = new UrlParser('http://makanmakan.com/#/detail/image')
console.log(splitted.getIdentifier())