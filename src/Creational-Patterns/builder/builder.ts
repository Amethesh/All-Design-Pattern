import { ConcreteHouseBuilder } from "./concreteBuilder";
import { Director } from "./director";
import { House } from "./house";

// Builder interface
export interface HouseBuilder {
    reset(): void;
    buildWindows(number: number): void;
    buildDoors(number: number): void;
    buildRoof(): void;
    getResult(): House;
}

// Client code
const director = new Director();
const builder = new ConcreteHouseBuilder();

director.setBuilder(builder);

// Construct a simple house
director.constructSimpleHouse();
let house = builder.getResult();
house.show(); // House with 4 windows, 2 doors and a roof

// Construct a luxury house
director.constructLuxuryHouse();
house = builder.getResult();
house.show(); // House with 10 windows, 4 doors and a roof
