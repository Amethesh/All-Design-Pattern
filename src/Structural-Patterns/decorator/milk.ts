import { CoffeeDecorator } from "./coffee";

// Concrete Decorators
export class MilkDecorator extends CoffeeDecorator {
    public cost(): number {
        return super.cost() + 2;
    }

    public description(): string {
        return super.description() + ', milk';
    }
}