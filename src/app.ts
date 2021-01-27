import { Invoicex } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLSelectElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value==='invoice'){
        doc = new Invoicex(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value,'end');

})


// let docOne: HasFormatter;
// let docTwo: HasFormatter;


// docOne = new Invoicex('yoshy','web work',250);
// docTwo = new Payment('mario','plumbing work',350);


// const inOne = new Invoicex('mario','work on the webside',400);
// const inTwo = new Invoicex('luigi','work on the webside',500);

// let invoices: Invoicex[] = [];

// invoices.push(inOne);
// invoices.push(inTwo);

// console.log(invoices);

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