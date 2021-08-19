function animation () {
    light.showRing(
    "red red red red red red red red red red"
    )
    pause(100)
    light.showRing(
    `red red red red red red red red red blue`
    )
    pause(100)
    light.showRing(
    `red red red red red red red red blue blue`
    )
    pause(100)
    light.showRing(
    `red red red red red red red blue blue blue`
    )
    pause(100)
    light.showRing(
    `red red red red red red blue blue blue blue`
    )
    pause(100)
    light.showRing(
    `red red red red red blue blue blue blue blue`
    )
    pause(100)
    light.showRing(
    `red red red red green blue blue blue blue blue`
    )
    pause(100)
    light.showRing(
    `red red red green green blue blue blue blue blue`
    )
    pause(100)
    light.showRing(
    `red red green green green blue blue blue blue blue`
    )
    pause(100)
    light.showRing(
    `red green green green green blue blue blue blue blue`
    )
    pause(100)
    light.showRing(
    `green green green green green blue blue blue blue blue`
    )
    pause(100)
    light.showRing(
    `green green green green green blue blue blue blue red`
    )
    pause(100)
    light.showRing(
    `green green green green green blue blue blue red red`
    )
    pause(100)
    light.showRing(
    `green green green green green blue blue red red red`
    )
    pause(100)
    light.showRing(
    `green green green green green blue red red red red`
    )
    pause(100)
    light.showRing(
    `green green green green green red red red red red`
    )
    pause(100)
    light.showRing(
    `green green green green red red red red red red`
    )
    pause(100)
    light.showRing(
    `green green green red red red red red red red`
    )
    pause(100)
    light.showRing(
    `green green red red red red red red red red`
    )
    pause(100)
    light.showRing(
    `green red red red red red red red red red`
    )
    pause(100)
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    servos.A1.run(-50)
    servos.A2.run(100)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    servos.A1.run(0)
    servos.A2.run(0)
})
input.pinA3.onEvent(ButtonEvent.Click, function () {
	
})
forever(function () {
    animation()
})
