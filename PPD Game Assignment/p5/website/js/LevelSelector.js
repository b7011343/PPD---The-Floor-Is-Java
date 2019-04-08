function LevelSelector(level){
    
    // variables
    this.level = level
    this.endX
    this.endY
    this.message
    // max x distance a player can jump on the same y level is 235+100(player width)

    this.levelSelect = function() // level builder with the platforms, spikes, and end flag
    {
        spikeList = [] // list to store all the spike objects
        platformList = [] // list to store all the platform objects
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
                this.endX = 6250
                this.endY = 300
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                var plat2 = new Platform(520, 300, 50, 100)
                var plat3 = new Platform(790, 250, 50, 100)
                var plat4 = new Platform(1090, 300, 50, 100)
                var plat5 = new Platform(1390, 300, 50, 350)
                var plat6 = new Platform(1940, 300, 50, 950)
                var plat7 = new Platform(3090, 300, 50, 100)
                var plat8 = new Platform(3360, 250, 50, 100)
                var plat9 = new Platform(3630, 200, 50, 100)
                var plat10 = new Platform(3975, 150, 50, 100)
                var plat11 = new Platform(3900, 350, 50, 100)
                var plat12 = new Platform(4200, 300, 50, 800)
                var plat13 = new Platform(5200, 300, 50, 100)
                var plat14 = new Platform(5470, 250, 50, 100)
                var plat15 = new Platform(5770, 300, 50, 500)

                var spike1 = new Spikes(1550, 300)
                var spike2 = new Spikes(2117, 300)
                var spike3 = new Spikes(2414, 300)
                var spike4 = new Spikes(2651, 300)
                var spike5 = new Spikes(4000, 150)
                var spike6 = new Spikes(4600, 300)

                this.message = "-LEVEL 2-"

                platformList = [plat1, plat2, plat3, plat4, plat5, plat6, plat7, plat8, plat9, plat10,
                                plat11, plat12, plat13, plat14, plat15]
                spikeList = [spike1, spike2, spike3, spike4, spike5, spike6]
                break;

            }
            case 3:     // LEVEL 3 (CONNOR)
            {
                this.endX = 6250
                this.endY = 350
                endFlag = new EndFlag(this.endX, this.endY)
                var plat1 = new Platform(-1280, 300, 50, 1600)
                var plat2 = new Platform(580, 450, 50, 100)
                var plat3 = new Platform(915, 450 , 50, 80)
                var plat4 = new Platform(1250, 450 , 50, 60)
                var plat5 = new Platform(1585, 450 , 50, 40)
                var plat6 = new Platform(1920, 450 , 50, 20)
                var plat7 = new Platform(2245, 450 , 50, 10)
                var plat8 = new Platform(2530, 400 , 50, 100)
                var plat9 = new Platform(2845, 400 , 50, 100)
                var plat10 = new Platform(3120, 350 , 50, 100)
                var plat11 = new Platform(3455, 350 , 50, 2795)

                var spike1 = new Spikes(100, 300)
                
                var spike2 = new Spikes(3600, 350)
                var spike10 = new Spikes(3650, 350)
                
                var spike3 = new Spikes(3900, 350)
                var spike11 = new Spikes(3950, 350)
                
                var spike4 = new Spikes(4200, 350)
                var spike12 = new Spikes(4250, 350)
                
                var spike5 = new Spikes(4500, 350)
                var spike13 = new Spikes(4550, 350)
                
                var spike6 = new Spikes(4800, 350)
                var spike14 = new Spikes(4850, 350)
                
                var spike7 = new Spikes(5100, 350)
                var spike15 = new Spikes(5150, 350)
                
                var spike8 = new Spikes(5400, 350)
                var spike16 = new Spikes(5450, 350)

                var spike9 = new Spikes(5700, 350)
                var spike17 = new Spikes(5750, 350)

                
                var spike18 = new Spikes(6000, 350)
                var spike19 = new Spikes(6050, 350)
                

               
               

                
                this.message = "-LEVEL 3-"

                platformList = [plat1,plat2,plat3,plat4,plat5,plat6,plat7,plat8,plat9,plat10,plat11]
                spikeList = [spike1, spike2, spike3, spike4, spike5, spike6, spike7, spike8, spike9, spike10, spike11, spike12, spike13, spike14, spike15, spike16, spike17, spike18, spike19]
                break;
            }
            case 4:     //LEVEL 4 (GEORGE)
            {
                this.endX = 2700
                this.endY = 400
                endFlag = new EndFlag(this.endX, this.endY)

                var plat1  = new Platform(-1280, 300, 50, 1600)
                var plat2  = new Platform(plat1.endX  + 150, 600, 50, 300)
                var plat3  = new Platform(plat2.endX  + 150, 550, 50, 100)
                var plat4  = new Platform(plat3.endX  + 150, 500, 50, 100)
                var plat5  = new Platform(plat4.endX  + 150, 500, 50, 300)

                var plat6  = new Platform(plat1.endX  + 250, 250, 50, 100)
                var plat7  = new Platform(plat6.endX  + 150, 250, 50, 100)
                var plat8  = new Platform(plat7.endX  + 200, 200, 50, 100)

                var plat9  = new Platform(plat5.endX  + 150, 450, 50, 100)
                var plat10 = new Platform(plat9.endX  + 150, 430, 50, 50 )
                var plat11 = new Platform(plat10.endX + 150, 410, 50, 25 )
                var plat12 = new Platform(plat11.endX + 150, 390, 50, 10 )

                var platEnd = new Platform(plat12.endX + 150, 400, 50, 200)

                var spike1 = new Spikes(plat1.endX + 150, 600)
                var spike2 = new Spikes(plat4.endX + 250, 500)


                this.message = "-LEVEL 4-"

                platformList = [plat1, plat2, plat3, plat4, plat5, plat6, plat7, plat8, plat9, plat10, plat11, plat12, platEnd]
                spikeList = [spike1, spike2]
            }
        }
    }
}
