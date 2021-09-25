export default class Product {
    constructor(code, name, quantity, cost, value) {
        this.code = code;
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
        this.value = value;
    }

    getCode(){
        return this.code;
    }

    getName() {
        return this.name.toUpperCase();
    }

    getQuantity() {
        return this.quantity;
    }

    getCost() {
        return this.cost;
    }
}