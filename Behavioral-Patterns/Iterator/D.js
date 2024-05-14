// class Store {
//     constructor(user){
//         this.stripe = new Stripe(user);
//     }
//     purchaseBike(quantity){
//         this.stripe.makePayment(200 * quantity )
//     }
//     purchaseHelment(quantity){
//         this.stripe.makePayment(15 * quantity)
//     }
// }


// class Stripe{
//     constructor(user) {
//         this.user = user
//     }
//     makePayment(amountInCents){
//         console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`)
//     }
// }

// class paypal{
//     makePayment(user, amountInDollars){
//         console.log(`${user} made payment of $${amountInDollars} with paypal`)
//     }
// }


// const store = new Store('john')
// store.purchaseBike(2)
// store.purchaseHelment(2)



//Instead we use 

class Store {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;  
    }

    purchaseBike(quantity){
        this.paymentProcessor.makePayment(200 * quantity);
    }

    purchaseHelmet(quantity){
        this.paymentProcessor.makePayment(15 * quantity);
    }
}

class Stripe{
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
    }
}

class Paypal {
    makePayment(user, amountInDollars){
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

class StripePaymentProcessor {
    constructor(user){
        this.stripe = new Stripe(user);
    }

    makePayment(amountInDollars){
        this.stripe.makePayment(amountInDollars * 100);
    }
}

class PaypalPaymentProcessor {
    constructor(user){
        this.stripe = user
        this.paypal = new Paypal()
    }

    makePayment(amountInDollars){
        this.paypal.makePayment(this.user, amountInDollars)
    }
}

const store = new Store(new PaypalPaymentProcessor("john"));
// const store = new Store(new StripePaymentProcessor("john"));
store.purchaseBike(2);
store.purchaseHelmet(2); 



