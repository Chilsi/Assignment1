module.exports = class Order{
    constructor(sName, sUrl){
        this.sName = sName;
        this.rate = 0;
        this.sUrl = sUrl;
        this.bDone = false;
    }
    isDone(bDone){
        if(bDone){
            this.bDone = bDone;
        }
        return this.bDone;
    }
}