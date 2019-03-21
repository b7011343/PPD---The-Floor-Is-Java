
function LevelSelector(level){
    
    this.level = level
    this.endX
    this.endY
    this.message
    // max x distance a player can jump on the same y level is 235+100(player width)

    this.levelSelect = function()
    {
        switch (this.level)
        {
            case 0:
            {
                this.endX = 1400
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                var plat2 = new Platform(550, 300, 50, 100)
                var plat3 = new Platform(885, 300, 50, 100)
                var plat4 = new Platform(1110, 300, 50, 500)
                
                this.message = "-TUTORIAL LEVEL-\nPress SPACE to jump and avoid falling in the lava!"

                platformList = [plat1, plat2, plat3, plat4]
                break;
            }
            case 1:
            {
                this.endX = 200
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                
                this.message = "-LEVEL 1-"

                platformList = [plat1]
                break;
            }
            case 2:
            {
                this.endX = 200
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                
                this.message = "-LEVEL 2-"

                platformList = [plat1]
                break;
            }
            case 3:
            {
                this.endX = 200
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                
                this.message = "-LEVEL 3-"

                platformList = [plat1]
                break;
            }
            case 4:
            {
                this.endX = 200
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                
                this.message = "-LEVEL 4-"

                platformList = [plat1]
            }
        }
    }
}
