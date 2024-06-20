import { Coffee, SimpleCoffee } from "./coffee";
import { MilkDecorator } from "./milk";
import { SugarDecorator, WhipDecorator } from "./sweetner";

// Client code
function clientCode(coffee: Coffee) {
    console.log(`Cost: $${coffee.cost()}`);
    console.log(`Description: ${coffee.description()}`);
}

// Usage
let myCoffee = new SimpleCoffee();
clientCode(myCoffee);

myCoffee = new MilkDecorator(myCoffee);
clientCode(myCoffee); 

myCoffee = new SugarDecorator(myCoffee);
clientCode(myCoffee); 

myCoffee = new WhipDecorator(myCoffee);
clientCode(myCoffee);
