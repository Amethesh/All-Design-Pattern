import { CoffeeDecorator } from "./coffee";

export class SugarDecorator extends CoffeeDecorator {
    public cost(): number {
        return super.cost() + 1;
    }

    public description(): string {
        return super.description() + ', sugar';
    }
}

export class WhipDecorator extends CoffeeDecorator {
    public cost(): number {
        return super.cost() + 3;
    }

    public description(): string {
        return super.description() + ', whip';
    }
}
