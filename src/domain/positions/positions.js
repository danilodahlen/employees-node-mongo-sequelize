class Position {
    
    constructor(namePosition, percentCommission)
    {
        this._id                = _id;
        this.namePosition       = namePosition;
        this.percentCommission  = percentCommission
    }
    
    getPosition() {
        return { 
            "_id": this._id,
            "namePosition" : this.namePosition,
            "percentCommission" : this.percentCommission
        }
    }
}