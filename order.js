module.exports = class order{
    constructor(){
        this.bDone = false;
        this.rate = 0;
    }
    isDone(bDone){
        if(bDone){
            this.bDone = bDone;
        }
        return this.bDone;
    }
}