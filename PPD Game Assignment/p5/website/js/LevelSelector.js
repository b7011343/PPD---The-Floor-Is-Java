
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
            case 0:     // TUTORIAL LEVEL (DESIGNED AS A GROUP) / testing
            {
                this.endX = 1400
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                var plat2 = new Platform(550, 300, 50, 100)
                var plat3 = new Platform(885, 300, 50, 100)
                var plat4 = new Platform(1110, 300, 50, 500)

                var spike1 = new Spikes(100, 300)
                
                
                this.message = "-TUTORIAL LEVEL-\nPress SPACE to jump and avoid falling in the lava!"

                platformList = [plat1, plat2, plat3, plat4]
                spikeList = [spike1]
                
                break;
            }
            case 1:     // LEVEL 1 (JACOB)
            {
                this.endX = 4900
                this.endY = 475
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 =  new Platform(-1280, 300, 50, 1600)
                var plat2 =  new Platform(580, 300, 50, 100)
                var plat3 =  new Platform(960, 300, 50, 100)
                var plat4 =  new Platform(1335, 300, 50, 100)
                var plat5 =  new Platform(1620, 250, 50, 100)
                var plat6 =  new Platform(1860, 200, 50, 100)
                var plat7 =  new Platform(2260, 300, 50, 400)
                var plat8 =  new Platform(3100, 600, 50, 250)
                var plat9 =  new Platform(3490, 550, 50, 100)
                var plat10 = new Platform(3730, 500, 50, 100)
                var plat11 = new Platform(4050, 500, 50, 10)
                var plat12 = new Platform(4280, 500, 50, 10)
                var plat13 = new Platform(4510, 500, 50, 10)
                var plat14 = new Platform(4750, 475, 50, 350)

                this.message = "-LEVEL 1-"

                platformList = [plat1, plat2, plat3, plat4, plat5, plat6, plat7, plat8, plat9, plat10,
                                plat11, plat12, plat13, plat14]
                break;
            }
            case 2:     // LEVEL 2 (JOE)
            {
                this.endX = 6280
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                var plat2 = new Platform(550, 300, 50, 100)
                var plat3 = new Platform(880, 225, 50, 100)
                var plat4 = new Platform(1210, 300, 50, 100)
                var plat5 = new Platform(1540, 300, 50, 350)
                var plat6 = new Platform(2120, 300, 50, 950)
                var plat7 = new Platform(3300, 300, 50, 100)
                var plat8 = new Platform(3630, 225, 50, 100)
                var plat9 = new Platform(3960, 150, 50, 100)
                var plat10 = new Platform(4290, 75, 50, 100)
                var plat11 = new Platform(4290, 300, 50, 100)
                var plat12 = new Platform(4620, 300, 50, 800)
                var plat13 = new Platform(5650, 300, 50, 100)
                var plat14 = new Platform(5980, 300, 50, 500)

                var spike1 = new Spikes(1715, 300)
                var spike2 = new Spikes(2350, 300)
                var spike3 = new Spikes(2480, 300)
                var spike4 = new Spikes(2810, 300)
                var spike5 = new Spikes(4290, 75)

                this.message = "-LEVEL 2-"

                platformList = [plat1, plat2, plat3, plat4, plat5, plat6, plat7, plat8, plat9, plat10, plat11, plat12, plat13, plat14]
                spikeList = [spike1, spike2, spike3, spike4, spike5]
                break;

            }
            case 3:     // LEVEL 3 (CONNOR)
            {
                this.endX = 200
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                
                this.message = "-LEVEL 3-"

                platformList = [plat1]
                break;
            }
            case 4:     //LEVEL 4 (GEORGE)
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
