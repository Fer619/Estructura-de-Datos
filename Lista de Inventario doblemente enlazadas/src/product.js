export default class Product{

    constructor(code, name, quantity, cost){
         this.code = code;
         this.name = name;
         this.quantity = quantity;
         this.cost = cost;
         
    }

    getCode(){
        return this.code;
    }

    getName(){
        return this.name;
    }

    getQuantity(){
        return this.quantity;
    }

    getCost(){
        return this.cost;
    }

    getValue(){
        return this.quantity * this.cost;
    }
}