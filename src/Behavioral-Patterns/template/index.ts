// Abstract class with the template method
abstract class Beverage {
    public prepareBeverage(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    // Steps of the algorithm with default implementations
    private boilWater(): void {
        console.log('Boiling water');
    }

    private pourInCup(): void {
        console.log('Pouring into cup');
    }

    // Abstract methods to be implemented by subclasses
    protected abstract brew(): void;
    protected abstract addCondiments(): void;
}

// Concrete class implementing the abstract methods
class Coffee extends Beverage {
    protected brew(): void {
        console.log('Brewing coffee');
    }

    protected addCondiments(): void {
        console.log('Adding sugar and milk');
    }
}

// Another concrete class implementing the abstract methods
class Tea extends Beverage {
    protected brew(): void {
        console.log('Steeping the tea');
    }

    protected addCondiments(): void {
        console.log('Adding lemon');
    }
}

// Client code
function clientCode(beverage: Beverage) {
    beverage.prepareBeverage();
}

// Usage
console.log('Making coffee:');
clientCode(new Coffee());

console.log('\nMaking tea:');
clientCode(new Tea());
