
import { createElement } from "../framework/render.js";

function createExpenseComponentTemplate(expense) {
    const {title,author,genre}=expense

    return (
        `<div class="book">
        <h2>Product: ${product}</h2>
        <p>Price: ${price}</p>
        <p>Category: ${category}</p>
        </div>`
    )
}

export default class ExpenseComponent {
    constructor({expense}) {
        this.expense=expense;
    }

    get template(){
       return createExpenseComponentTemplate(this.expense)
    }

    getelement(){
        if(!this.element){
            this.element=createElement(this.template)
        }
        return this.element;
    }
}