input.onButtonPressed(Button.A, function () {
    tal = tal + 1
})
input.onButtonPressed(Button.AB, function () {
    tal = 0
})
input.onButtonPressed(Button.B, function () {
    tal = tal - 1
})
let tal = 0
tal = 0
basic.forever(function () {
    basic.showString("" + (tal))
})
basic.forever(function () {
    if (tal) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.ringTone(440)
        basic.pause(100)
        music.stopAllSounds()
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(tal * 1000)
    }
})
