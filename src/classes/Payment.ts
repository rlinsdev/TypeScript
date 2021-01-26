// Access modifiers in class - Private, readonly, public
// Module system - Just moder browsers understand
import { HasFormatter } from '../interfaces/HasFormatter.js';
export class Payment implements HasFormatter{
    // Put the access modifier in constructor
    constructor(
        public recipient: string,
        public details:string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} owes $ ${this.amount} for ${this.details}`;
    }
}
