// Component interface
export interface Coffee {
    cost(): number;
    description(): string;
}

// Concrete Component
export class SimpleCoffee implements Coffee {
    public cost(): number {
        return 5;
    }

    public description(): string {
        return 'Simple coffee';
    }
}
// Base Decorator
export class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }

    public cost(): number {
        return this.decoratedCoffee.cost();
    }

    public description(): string {
        return this.decoratedCoffee.description();
    }
}
