export class Payment {
    // Put the access modifier in constructor
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} owes $ ${this.amount} for ${this.details}`;
    }
}
