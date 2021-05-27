input.onButtonPressed(Button.A, function () {
    radio.sendString("Up Cork!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Dublin Sucks!")
})
radio.setGroup(1)
