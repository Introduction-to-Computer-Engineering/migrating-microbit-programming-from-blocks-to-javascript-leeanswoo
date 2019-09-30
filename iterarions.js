input.onButtonPressed(Button.B, function () {
    music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    for (let i = 0; i < 4; i++) {
        for (let i = 0; i < 1; i++) {
            images.createImage(`
                . . # . .
                . . # # .
                . . # . .
                # # # . .
                # # # . .
                `).scrollImage(1, 200)
        }
        for (let i = 0; i < 1; i++) {
            images.createImage(`
                . . # . .
                . . # . .
                . . # . .
                # # # . .
                # # # . .
                `).scrollImage(1, 200)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Forever)
    for (let i = 0; i < 4; i++) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . . # . .
            . # . # .
            `)
    }
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
})
