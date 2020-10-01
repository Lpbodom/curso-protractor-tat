
const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destination')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')
class Destination {
  constructor () {
    this.self = new DestinationComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`)
  }
}

module.exports = Destination
