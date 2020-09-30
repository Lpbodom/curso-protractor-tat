const DestinationsComponent = require('./components/destinations')

const randomNumberBetweenOneAnd = require ('../utils/randomNumberBetweenOneAndN')
class Tag{
    constructor(){
        this.destinations = new DestinationsComponent()
    }
    visit(){  
        browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`)
       
    }
}

module.exports = Tag

