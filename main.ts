let hole = false
let gameOver = false
let scoreA = 0
let scoreB = 0

//If player A pressed the button while there is a hole add a point for player A
input.onButtonPressed(Button.A, function () {
    if (hole == true) {
        hole = false
        scoreA++
        basic.clearScreen()
        music.playTone(Note.C, 100)
        basic.showString(" A=" + scoreA)
    } else {
        gameover()
    }
})
//If player B pressed the button while there is a hole add a point for player B
input.onButtonPressed(Button.B, function () {
    if (hole == true) {
        hole = false
        scoreB++
        basic.clearScreen()
        music.playTone(Note.C, 100)
        basic.showString(" B=" + scoreB)
    } else {
        gameover()
    }
})


function gameover() {
    //Game over script
    basic.clearScreen()
    //Show gameover text with player scores
    basic.showString("!!! A=" + scoreA + " B=" + scoreB)
    basic.pause(500)
    //Reset scores and disable gameover
    scoreA = 0
    scoreB = 0
    gameOver = false
    //Loop back to start
    start()
}

function start() {
    //On start clear screen and set the hole variable to false
    basic.clearScreen()
    hole = false

    //Create a filled screen
    basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
    //wait for a interval between 500 and 100 ms
    basic.pause(Math.floor(Math.random() * 500) + 100)
    //Turn off a LED on a x/y axis
    led.unplot(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    //Set the hole variable to true while the hole is there
    hole = true
    basic.pause(500)
    //Loop back to start
    start()
}
start()