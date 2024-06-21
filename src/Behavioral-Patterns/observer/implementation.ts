import { Observer, Subject } from "./interface";

export class Customer implements Observer {
    constructor(private name: string) {}

    update(subject: Subject): void {
        console.log(`${this.name}, the product you want is back in stock.`);
    }
}

export class Product implements Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const removeIndex = this.observers.findIndex(obs => observer === obs);
        if (removeIndex !== -1) {
            this.observers.splice(removeIndex, 1);
        }
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }

    restock(): void {
        this.notifyObservers();
    }
}