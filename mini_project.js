input.onButtonPressed(Button.A, function () {
    Number_one += 1
    basic.showNumber(Number_one)
    Number_one = Number_one
})
input.onButtonPressed(Button.B, function () {
    Number_two += 1
    basic.showNumber(Number_two)
    Number_two = Number_two
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Number_one + Number_two)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let Number_two = 0
let Number_one = 0
Number_one = 0
Number_two = 0
