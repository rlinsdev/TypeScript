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


// Enum
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { tile: 'name of the wind' }
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.AUTHOR,
    data: {name: 'yoshi'}
}