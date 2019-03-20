function LevelSelector(level){
    
    this.level = level
    this.endX
    this.endY
    this.endFlag
    // max x distance a player can jump on the same y level is 235+100(player width)

    this.levelSelect = function()
    {
        switch (this.level)
        {
            case 0:
            {
                this.endX = 1400
                this.endY = 300
                this.endFlag = new EndFlag(endX, endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                var plat2 = new Platform(550, 300, 50, 100)
                var plat3 = new Platform(885, 300, 50, 100)
                var plat4 = new Platform(1110, 300, 50, 500)
                
                platformList = [plat1, plat2, plat3, plat4]
                break;
            }
            case 1:
            {
                break;
            }
            case 2:
            {
                break;
            }
            case 3:
            {
                break;
            }
        }
    }
}
