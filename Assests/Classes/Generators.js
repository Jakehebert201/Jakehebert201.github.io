//Generic class file for Generators
class Generators{

    id;
    cost;
    amount;
    multiplier;
    buyAmount;
    AllGens = [generators[0],generators[1], generators[2], generators[3], generators[4], generators[5], generators[6], generators[7]];
    SacGens = [generators[0],generators[1], generators[2], generators[3], generators[4], generators[5], generators[6]];
    Gens28 = [generators[1], generators[2], generators[3], generators[4], generators[5], generators[6], generators[7]];

constructor(id, cost, amount, multiplier, buyAmount){
    this.id = id;
    this.cost = cost;
    this.amount = amount;
    this.multiplier = multiplier;
    this.buyAmount = buyAmount;
}

GeneratorTick(){
    this.Gens28.forEach(element => {generators[i].amount += generators[i+1].amount * generators[i+1].multiplier;});
}
//This should in theory, generate the previous tier of generators based on the amount of the next tier of generators


buy(id){
Currency = Currency - Generators.cost;
Generators.buyAmount++;
Generators.cost = Generators.cost * 1.1;
Generators.amount++;
if(Generators.buyAmount % 10 == 0){
    Generators.multiplier = Generators.multiplier * 2;
    Generators.cost = Math.floor(Math.Pow(Generators.cost, 1.25));
}
}
buy10(id){
    for(i = 0; i < 10; i++){
        buy(id);
    }
}
buymax(id){
    while(Currency > Generators.cost){
        buy(id);
    }
}
}
export default Generators;
// Path: Jakehebert201.github.io\Assests\Classes\Upgrades.js