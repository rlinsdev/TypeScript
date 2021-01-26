"use strict";
// Classes
var Invoicex = /** @class */ (function () {
    function Invoicex(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
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
