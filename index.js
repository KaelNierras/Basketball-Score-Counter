let homeScore = document.getElementById("numh")
let guestScore = document.getElementById("numg")
let scoreH = 0
let scoreG = 0

function addScoreH(x) {
    scoreH += x
    homeScore.textContent = scoreH
}

function addScoreG(x) {
    scoreG += x
    guestScore.textContent = scoreG
}

function newGame(){
    scoreH = 0
    scoreG = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}

