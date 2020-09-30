const helper = require('protractor-helper')

const EditDestination = require('../page-objects/editDestination')

describe ('Give I\'m at a random edit destination page', () => {
    let editDestination

    beforeEach(() => {
        editDestination = new EditDestination()
        editDestination.visit() 
     })

     fit('Then I see an image, and a form to edit the name and description',() => {
        helper.waitForElementVisibility(editDestination.self.image)
        helper.waitForElementVisibility(editDestination.form.nameLabel)
        helper.waitForElementVisibility(editDestination.form.nameInput)
        helper.waitForElementVisibility(editDestination.form.descriptionLabel)
        helper.waitForElementVisibility(editDestination.form.descriptionImput)
        helper.waitForElementVisibility(editDestination.form.updateButton)



     })

})