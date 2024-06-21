import { Customer, Product } from "./implementation";

const product = new Product();

const john = new Customer('John');
const jane = new Customer('Jane');

product.addObserver(john);
product.addObserver(jane);

product.restock(); 