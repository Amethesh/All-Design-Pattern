// Train interface (Target)
interface Train {
    runOnTracks(): void;
}

// Car class (Adaptee)
class Car {
    public drive(): void {
        console.log("Car is driving on the road.");
    }
}

// Adapter class
class CarToTrainAdapter implements Train {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    public runOnTracks(): void {
        console.log("Adapter: Converting car drive to train tracks run.");
        this.car.drive();
    }
}

// Client code
function clientCode(train: Train) {
    train.runOnTracks();
}

// Usage
const myCar = new Car();
const carAdapter = new CarToTrainAdapter(myCar);

console.log("Client: I can work with Train objects:");
clientCode(carAdapter); // Adapter: Converting car drive to train tracks run. Car is driving on the road.
