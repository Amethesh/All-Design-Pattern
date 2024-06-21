// Strategy interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategy for Credit Card payment
class CreditCardPayment implements PaymentStrategy {
    private name: string;
    private cardNumber: string;
    private cvv: string;
    private expiryDate: string;

    constructor(name: string, cardNumber: string, cvv: string, expiryDate: string) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    public pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

// Concrete Strategy for PayPal payment
class PayPalPayment implements PaymentStrategy {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal`);
    }
}

// Context class
class ShoppingCart {
    private items: { name: string; price: number }[] = [];
    private paymentStrategy: PaymentStrategy;

    public addItem(item: { name: string; price: number }): void {
        this.items.push(item);
    }

    public setPaymentStrategy(strategy: PaymentStrategy): void {
        this.paymentStrategy = strategy;
    }

    public checkout(): void {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        this.paymentStrategy.pay(total);
    }
}

// Client code
const cart = new ShoppingCart();
cart.addItem({ name: "Book", price: 10 });
cart.addItem({ name: "Pen", price: 2 });

cart.setPaymentStrategy(new CreditCardPayment("John Doe", "1234567890123456", "123", "12/24"));
cart.checkout(); // Paid 12 using Credit Card

cart.setPaymentStrategy(new PayPalPayment("john@example.com", "password"));
cart.checkout(); // Paid 12 using PayPal
