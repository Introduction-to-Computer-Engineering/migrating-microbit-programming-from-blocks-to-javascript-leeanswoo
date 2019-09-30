input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
basic.forever(function () {
	
})
