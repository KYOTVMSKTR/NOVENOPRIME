for (let index = 0; index < 3; index++) {
    basic.clearScreen()
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.pause(50)
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
}
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        basic.showString("" + (input.temperature()))
        basic.pause(100)
        basic.clearScreen()
    }
    while (input.pinIsPressed(TouchPin.P0)) {
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
    while (input.logoIsPressed()) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showNumber(randint(0, 10))
        basic.clearScreen()
        basic.showNumber(input.lightLevel())
    }
})
