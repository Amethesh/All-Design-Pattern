// Subsystem 1: Order Processing
class OrderProcessing {
    public processOrder(productId: string, quantity: number): void {
        console.log(`OrderProcessing: Processing order for product ${productId}, quantity ${quantity}`);
    }
}

// Subsystem 2: Payment Processing
class PaymentProcessing {
    public processPayment(amount: number): void {
        console.log(`PaymentProcessing: Processing payment of $${amount}`);
    }
}

// Subsystem 3: Shipping
class Shipping {
    public arrangeShipping(address: string): void {
        console.log(`Shipping: Arranging shipping to address ${address}`);
    }
}

// Facade
class OnlineStoreFacade {
    private orderProcessing: OrderProcessing;
    private paymentProcessing: PaymentProcessing;
    private shipping: Shipping;

    constructor() {
        this.orderProcessing = new OrderProcessing();
        this.paymentProcessing = new PaymentProcessing();
        this.shipping = new Shipping();
    }

    public placeOrder(productId: string, quantity: number, amount: number, address: string): void {
        console.log("OnlineStoreFacade: Starting order placement process");
        this.orderProcessing.processOrder(productId, quantity);
        this.paymentProcessing.processPayment(amount);
        this.shipping.arrangeShipping(address);
        console.log("OnlineStoreFacade: Order placement process completed");
    }
}

// Client code
function clientCode() {
    const store = new OnlineStoreFacade();
    store.placeOrder("ABC123", 2, 100, "123 Main St, Springfield, USA");
}

// Usage
clientCode();
