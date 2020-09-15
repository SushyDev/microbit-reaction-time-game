let hole = false
let gameOver = false
let scoreA = 0
let scoreB = 0

//If player A pressed the button while there is a hole add a point for player A
input.onButtonPressed(Button.A, function () {
    if (hole == true) {
        if (scoreA < 1) {
            hole = false
            scoreA++
            music.playTone(Note.C, 100)
            basic.showString(" A=" + scoreA)
        } else {
            scoreA++
            music.playTone(Note.C, 100)
            basic.showString(" A=" + scoreA)
            basic.clearScreen()
            playerWins()
        }
    } else {
        if (scoreA > 0) {
            hole = false
            scoreA--
            music.playTone(Note.C, 100)
            basic.showString(" A=" + scoreA)
        } else {

        }
    }
})
//If player B pressed the button while there is a hole add a point for player B
input.onButtonPressed(Button.B, function () {
    if (hole == true) {
        if (scoreB < 9) {
            hole = false
            scoreB++
            music.playTone(Note.C, 100)
            basic.showString(" B=" + scoreB)
        } else {
            scoreB++
            music.playTone(Note.C, 100)
            basic.showString(" B=" + scoreB)
            basic.clearScreen()
            playerWins()
        }
    } else {
        if (scoreB > 0) {
            hole = false
            scoreB++
            music.playTone(Note.C, 100)
            basic.showString(" B=" + scoreB)
        } else {
            //score too low
        }
    }
})


function gamever() {
    //Game over script

    //Show gameover text with player scores
    basic.showString("!!! A=" + scoreA + " B=" + scoreB)
    basic.pause(100)
    //Reset scores and disable gameover
    scoreA = 0
    scoreB = 0
    gameOver = false
    //Loop back to start
    start()
}

function playerWins() {
    let winner = checkWinner()
    function checkWinner() {
        if(scoreA > scoreB) {
        return "A";
        } else {
            return "B";
        }
    }
    basic.showString(winner + " Wins!")
}

function start() {
    //On start clear screen and set the hole variable to false
    hole = false
    basic.clearScreen()

    //Create a filled screen
    basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
    //wait for a interval between 1000 and 0 ms
    basic.pause(Math.floor(Math.random() * 1000) + 0)
    //Turn off a LED on a x/y axis
    led.unplot(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    //Set the hole variable to true while the hole is there
    hole = true
    basic.pause(750)
    //Loop back to start after 750ms
    start()
}
start()