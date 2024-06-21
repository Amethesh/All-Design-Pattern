// Abstract Expression
interface Expression {
    interpret(context: Map<string, number>): number;
}

// Terminal Expression for Numbers
class NumberExpression implements Expression {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    public interpret(context: Map<string, number>): number {
        return this.number;
    }
}

// Terminal Expression for Variables
class VariableExpression implements Expression {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public interpret(context: Map<string, number>): number {
        return context.get(this.name) ?? 0;
    }
}

// Non-terminal Expression for Addition
class AddExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    public interpret(context: Map<string, number>): number {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}

// Non-terminal Expression for Subtraction
class SubtractExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    public interpret(context: Map<string, number>): number {
        return this.left.interpret(context) - this.right.interpret(context);
    }
}

// Client code
const context = new Map<string, number>();
context.set('x', 10);
context.set('y', 20);

// Expression: x + y - 10
const expression: Expression = new SubtractExpression(
    new AddExpression(new VariableExpression('x'), new VariableExpression('y')),
    new NumberExpression(10)
);

const result = expression.interpret(context);
console.log(`Result: ${result}`); // Result: 20
