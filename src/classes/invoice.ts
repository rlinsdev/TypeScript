// Classes
// Access modifiers in class - Private, readonly, public

// Module system - Just moder browsers understand
export class Invoicex{
    // Put the access modifier in constructor
    constructor(
        public client: string,
        public details:string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
