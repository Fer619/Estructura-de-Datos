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

    static readForm() {
        let inpCode = document.querySelector("#code");
        let inpName = document.querySelector("#name");
        let inpQuantity = document.querySelector("#quantity");
        let inpCost = document.querySelector("#cost");
    
        let code = Number(inpCode.value);
        let name = inpName.value;
        let quantity = Number(inpQuantity.value);
        let cost = Number(inpCost.value);
    
        if (code && name && quantity && cost) {
          inpCode.value = "";
          inpName.value = "";
          inpQuantity.value = "";
          inpCost.value = "";
    
          return new Products(code, name, quantity, cost);
        }
        return false;
      }

}