let list: number[] = []
let currentNote = 0
input.onButtonPressed(Button.A, function () {
    if (list.length < 10) {
        list.push(currentNote)
        basic.showNumber(10 - list.length)
    }
})
input.onButtonPressed(Button.B, function () {
    list = []
    basic.clearScreen()
})
basic.forever(function () {
    if (true) {
        currentNote = input.acceleration(Dimension.X) + 1300
        music.ringTone(currentNote)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        for (let value of list) {
            music.playTone(value, music.beat(BeatFraction.Whole))
        }
    }
})
