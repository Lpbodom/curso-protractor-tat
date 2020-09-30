const { element } = require("protractor")

class Form{
    constructor(){
    this.self = element(by.css('.destination form'))
    this.nameLabel = this.self.element(by.css('label[for="destination_name]'))
    this.nameImput = this.self.element(by.id('destination_name'))
    this.destinationLabel = this.self.element(by.css('label[for="destination_destination]'))
    this.destinationImput = this.self.element(by.id('destination_destination'))
    this.updateButton = this.self.element(by.css('input[type="sumit"]'))






    }

}

module. exports = Form