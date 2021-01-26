// Classes
// Access modifiers in class - Private, readonly, public
// Module system - Just moder browsers understand
export class Invoicex {
    // Put the access modifier in constructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
