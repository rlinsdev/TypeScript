"use strict";
// Classes
// Access modifiers in class - Private, readonly, public
var Invoicex = /** @class */ (function () {
    // Put the access modifier in constructor
    function Invoicex(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoicex.prototype.format = function () {
        return this.client + " owes $ " + this.amount + " for " + this.details;
    };
    return Invoicex;
}());
var inOne = new Invoicex('mario', 'work on the webside', 400);
var inTwo = new Invoicex('luigi', 'work on the webside', 500);
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
// //
// //3) Function sgnature
// //
// let calc: (a: number, b:number, c:string)=> number;
// calc = (numOne: number, numTwo: number, action:string):number =>{
//     if(action =='add'){
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// }
// //
// // 2) Criando um obj comum à algumas chamadas 
// //
// type objectInCommom = {name: string, uid:string, item: string};
// //const greetCall = (user: {name: string, uid:string, item: string}) =>{
//     const greetCall = (user: objectInCommom) =>{
//     console.log(`${user.item} has a uid of ${user.uid}`)
// }
// //const greetCall2 = (user: {name: string, uid:string, item: string}) =>{
//     const greetCall2 = (user: objectInCommom) =>{
//     console.log(`${user.item} has a uid of ${user.uid}`)
// }
// //
// // 1)
// //
// // Terceiro parâmetro Opcional, número ou string
// const add = (a: number, b: number, c?: number|string)=>{
//     console.log(a+b);
// }
// add(2,5);
