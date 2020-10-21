class DashBoardPage {

    get $toggleButton () {return $('#showHideButton')}    
    get $textLabel () {return $('#textBox')}

    getLabelText() {
        return this.$textLabel.getText();
    }
}

module.exports = new DashBoardPage();