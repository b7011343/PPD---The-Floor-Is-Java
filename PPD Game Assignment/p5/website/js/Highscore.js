function Highscore(currentLevel){
    this.currentLevel = currentLevel
    

    this.updateLocalStorage = function()
    {
        switch (currentLevel){
            case 1:
            {
                var previousHS = parseInt(localStorage.getItem('lvl1'))
                localStorage.setItem('lvl1', previousHS+1)
                break;
            }
            case 2:
            {
                var previousHS = localStorage.getItem('lvl2');
                localStorage.setItem('lvl2', previousHS+1)
                break;
            }
            case 3:
            {
                var previousHS = localStorage.getItem('lvl3');
                localStorage.setItem('lvl3', previousHS+1)
                break;
            }
            case 4:
            {
                var previousHS = localStorage.getItem('lvl4');
                localStorage.setItem('lvl4', previousHS+1)
                break;
            }
        }
    }

    this.levelComplete = function(){

    }

}