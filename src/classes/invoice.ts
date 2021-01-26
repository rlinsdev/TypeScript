// Access modifiers in class - Private, readonly, public
// Module system - Just moder browsers understand
import { HasFormatter } from '../interfaces/HasFormatter.js';
export class Invoicex implements HasFormatter{
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
