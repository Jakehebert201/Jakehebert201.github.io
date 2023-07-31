import Generators from "./Generators.js";
class Gen8 extends Generators{
    newSacMult;
    oldSacMult;
    boostCost;
    constructor(id, cost, amount, multiplier, buyAmount){
        super(1, 1e+19, 0, 1,0);
        this.newSacMult = 1;
        this.oldSacMult = 1;
        this.boostCost = 1e+19;
    }
    Sacrifice(oldSacMult){
        var newSacMult = oldSacMult + Math.log10(Generators[0].amount);
        oldSacMult = newSacMult;
        array.forEach(element => {
            this.SacGens.amount = 0;
            console.log(this.SacGens.amount);
        });
    generators[7].multiplier *= newSacMult;    
    }
    Boost(){
        boostCost = Math.Pow(boostCost,10);
        array.forEach(element => {
            this.AllGens.multiplier *= 2;
            
    });
    }
}
export default Gen1;