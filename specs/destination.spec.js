const helper = require('protractor-helper')

const Destination = require('../page-objects/destination')

describe('Given I\'m at random destination page', () => {
  let destination

  beforeEach(() => {
    destination = new Destination()
    destination.visit()
  })
  it('then I see an image, a heading, a paragraph, and an anchor', () => {
    helper.waitForElementVisibility(destination.self.image)
    helper.waitForElementVisibility(destination.self.heading)
    helper.waitForElementVisibility(destination.self.paragraph)
    helper.waitForElementVisibility(destination.self.anchor)
  })
})
