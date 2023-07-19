import Generators from "./Generators.js";
class Gen1 extends Generators{
    
    constructor(id, cost, amount, multiplier, buyAmount){
        super(1, 10, 0, 1,0);
    }
   Generator1Tick(){
         Currency += Generators.amount * Generators.multiplier;
    }
}
export default Gen1;