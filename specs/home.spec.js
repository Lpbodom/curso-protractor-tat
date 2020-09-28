const helper = require('protractor-helper')

const Home = require('../page-objects/home')

describe('Given I\'m at the home page', () => {
  let homepage

  beforeAll(() => {
    homepage = new Home()
    homepage.visit()
  })

  describe('And the are five tags in the database', () => {
    it('Then they all render as cards', () => {
      helper.waitForElementVisibility(homepage.tags.cards.last())

      expect(homepage.tags.cards.count()).toBe(5)
    })
    describe(' Whem I look to the first card in isolation',() => {
      it('Then I see an image, a heading, and an anchor',() =>{
        helper.waitForElementVisibility(homepage.tags.imageOfFirstCard)
        helper.waitForElementVisibility(homepage.tags.headingOfFirstCard)
        helper.waitForElementVisibility(homepage.tags.anchorOfFirstCard)
      })
    })
  })
})
