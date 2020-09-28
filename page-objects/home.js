const TagsComponent = require('./components/tags')

class Home {
  constructor () {
    this.tags = new TagsComponent()
  }

  visit () {
    browser.get('/')
  }
}
module.exports = Home
