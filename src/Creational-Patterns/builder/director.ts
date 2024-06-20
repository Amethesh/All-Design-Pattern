import { HouseBuilder } from "./builder";

// Director class
export class Director {
    private builder: HouseBuilder;

    public setBuilder(builder: HouseBuilder): void {
        this.builder = builder;
    }

    public constructSimpleHouse(): void {
        this.builder.reset();
        this.builder.buildWindows(4);
        this.builder.buildDoors(2);
        this.builder.buildRoof();
    }

    public constructLuxuryHouse(): void {
        this.builder.reset();
        this.builder.buildWindows(10);
        this.builder.buildDoors(4);
        this.builder.buildRoof();
    }
}
