function Highscore(currentLevel){

    // variables
    this.currentLevel = currentLevel 
    this.storedLevel
    
    this.updateLocalStorage = function() // increments the highscore everytime the player dies
    {
        this.storedLevel = (parseInt(localStorage.getItem('lvl')))
        if (this.storedLevel != this.currentLevel)
        {
            localStorage.setItem('lvl', this.currentLevel)
        }

        switch (this.currentLevel){
            case 1:
            {
                var previousHS = parseInt(localStorage.getItem('lvl1'))
                localStorage.setItem('lvl1', previousHS+1)
                break;
            }
            case 2:
            {
                var previousHS = parseInt(localStorage.getItem('lvl2'));
                localStorage.setItem('lvl2', previousHS+1)
                break;
            }
            case 3:
            {
                var previousHS = parseInt(localStorage.getItem('lvl3'));
                localStorage.setItem('lvl3', previousHS+1)
                break;
            }
            case 4:
            {
                var previousHS = parseInt(localStorage.getItem('lvl4'));
                localStorage.setItem('lvl4', previousHS+1)
                break;
            }
        }
    }

    this.incrementLevel = function() // increments the level after completion
    {
        this.currentLevel++
        if (this.currentLevel > 4)
        {
            this.currentLevel = 4
            alert("CONGRATULATION! YOU HAVE COMPLETED THE GAME!")
        }
    }

}