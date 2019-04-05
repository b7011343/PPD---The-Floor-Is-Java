function Highscore(currentLevel){
    this.currentLevel = currentLevel
    var score = 0

    this.updateScore = function(){
        if (player.x % 5 === 0)
            ++this.score

        console.out(this.score)
    }

}