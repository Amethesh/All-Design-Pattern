// Prototype interface
interface Prototype {
    clone(): Prototype;
}

// Concrete Prototype
class ConcretePrototype1 implements Prototype {
    public field: string;

    constructor(field: string) {
        this.field = field;
    }

    public clone(): ConcretePrototype1 {
        return new ConcretePrototype1(this.field);
    }

    public show(): void {
        console.log(`ConcretePrototype1: ${this.field}`);
    }
}

class ConcretePrototype2 implements Prototype {
    public field: number;

    constructor(field: number) {
        this.field = field;
    }

    public clone(): ConcretePrototype2 {
        return new ConcretePrototype2(this.field);
    }

    public show(): void {
        console.log(`ConcretePrototype2: ${this.field}`);
    }
}

// Client code
const prototype1 = new ConcretePrototype1("Prototype 1");
const prototype2 = new ConcretePrototype2(42);

// Cloning prototypes
const clone1 = prototype1.clone();
const clone2 = prototype2.clone();

clone1.show();
clone2.show();

// Modifying cloned objects
clone1.field = "Modified Prototype 1";
clone2.field = 84;

clone1.show();
clone2.show(); 

// Original prototypes remain unchanged
prototype1.show();
prototype2.show(); 
