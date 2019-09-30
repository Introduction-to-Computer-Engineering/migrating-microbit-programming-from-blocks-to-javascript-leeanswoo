input.onButtonPressed(Button.B, function () {
    radio.sendNumber(10)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Yes")
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
basic.showString("Hello!")
radio.setGroup(1)
