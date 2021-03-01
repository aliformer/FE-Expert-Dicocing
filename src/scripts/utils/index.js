const {URL} = require('url')

class UrlParser extends URL {
  constructor(url){    
    super(url);  
    this.basePath =     
  }
  cleanPath(){
    this._trimmed= this.hash.slice(1)
    return this._trimmed

  }
  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },
    
  }
  getBasePath(){
    this.hash
  }

  getIdentifier(){
  }
  set identifier(id){
    return `${this.basePath}
  }
  
}


const splitted = new UrlParser('http://makanmakan.com/#/detail/image')
console.log(splitted.getIdentifier())