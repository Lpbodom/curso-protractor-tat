const DestinationComponent = require('.components/destination')
const FormComponent = require ('./form')

const randomNumberBetweenOneAnd = require ('../utils/randomNumberBetweenOneAndN')


class EditDestination{
    constructor() {
        this.self = new DestinationComponent()
        this.form = new FormComponent()        
    }

    visit() {
        browser.get(`/destination/${randomNumberBetweenOneAnd(15)}/edit`)
    }
}
module.exports = EditDestination