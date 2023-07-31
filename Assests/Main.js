import Decimal from "break_infinity.js";
import { Generators } from "./Classes/Generators.js";
import { Upgrades } from "./Classes/Upgrades.js";

const Currency = new Decimal(10);
Gen1 = new Gen1(0, 10, 0, 1,0);
Gen2 = new Generators(1, 100, 0, 1,0);
Gen3 = new Generators(2, 1e+4, 0, 1,0);
Gen4 = new Generators(3, 1e+6, 0, 1,0);
Gen5 = new Generators(4, 1e+9, 0, 1,0);
Gen6 = new Generators(5, 1e+13, 0, 1,0);
Gen7 = new Generators(6, 1e+18, 0, 1,0);
Gen8 = new Gen8(7, 1e+24, 0, 1,0, 1, 1, 1e+19);
// ID, Cost, Amount, Multiplier, BuyAmount, NewSacMult, OldSacMult, BoostCost, BoostAmount, BoostMult
// gens 2-7 have: id, cost, amount, multiplier, buyAmount, newSacMult, boostAmount, boostMult

const AllGens = [Gen1,Gen2, Gen3, Gen4, Gen5, Gen6, Gen7, Gen8];
const SacGens = [Gen1,Gen2, Gen3, Gen4, Gen5, Gen6, Gen7];
const Gens28 = [Gen2, Gen3, Gen4, Gen5, Gen6, Gen7, Gen8];
//creates list of generators

//create the main tick of the game, which allows for the creation of all generator ticks
let tickspeed = 1000;
setInterval(gameTick, tickspeed);
function gameTick(){
    AllGens.forEach(element => {
        element.GeneratorTick();
    });
    
}