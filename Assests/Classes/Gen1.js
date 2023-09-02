import GameLogic from "./Gamelogic.js";
import Generators from "./Generators.js";
import Decimal from "break_infinity.js";
import GameLogic from "./Gamelogic.js";
class Gen1 extends Generators{
    
    constructor(id, cost, amount, multiplier, buyAmount){
        super(1, 10, 0, 1,0);
    }
   Generator1Tick(){
         GameLogic.Currency += Generators.amount * Generators.multiplier;
    }
}
export default Gen1;