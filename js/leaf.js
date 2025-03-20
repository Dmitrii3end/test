export default class Leaf{
    fallingSpead;
    rotateSpead;
    size;
    posX;
    startPosX;
    posXbias;
    posY;

    constructor(startPosX, posY, size, rotateSpead, fallingSpead, posXbias = 0){
        this.startPosX = startPosX;
        this.posX = startPosX;
        this.posY = posY;
        this.size = size;
        this.rotateSpead = rotateSpead;
        this.fallingSpead = fallingSpead;
        this.posXbias = posXbias;
    }

    move(){
        this.posY += this.fallingSpead;
        this.posX += this.startPosX + Math.random(this.posXbias);
    }
}