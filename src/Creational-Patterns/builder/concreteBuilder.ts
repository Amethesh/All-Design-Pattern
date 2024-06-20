import { HouseBuilder } from "./builder";
import { House } from "./house";

// Concrete Builder
export class ConcreteHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    public reset(): void {
        this.house = new House();
    }

    public buildWindows(number: number): void {
        this.house.setWindows(number);
    }

    public buildDoors(number: number): void {
        this.house.setDoors(number);
    }

    public buildRoof(): void {
        this.house.setRoof(true);
    }

    public getResult(): House {
        return this.house;
    }
}
