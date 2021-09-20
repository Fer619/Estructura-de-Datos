export default class RegistryStorage {
    constructor() {
        this.registry = new Array;
        this.table = document.querySelector("#table");    
}

add(product) {
    let pos = this._find(product);

    if(pos >= 0){
        return false;
    }

    this.registry.push(product);
    this.show(product);
    this.showTotal();
}

_showTotal() {
    let total = 0;

    for(let i = 0; i < this.registry.length; i++ ){
    
    total = total + this.registry[i].getCost() * this.registry[i].getQuantity()
    }
}

_show(product) {
    let row = this.table.insertRow(1);

    let colCode = row.insertCell(0);
    let colName = row.insertCell(1);
    let colQuantity = row.insertCell(2);
    let colCost = row.insertCell(3);
    let colAction = row.insertCell(4);

    row.setAttribute("code", `row${product.getCode()}`);
    colCode.setAttribute("code", `colCode${product.getCode()}`);
    colName.setAttribute("code", `colName${product.getCode()}`);
    colQuantity.setAttribute("code", `colQuantity${product.getCode()}`);
    colCost.setAttribute("code", `colCost${product.getCode()}`);
    colAction.setAttribute("code", `colAction${product.getCode()}`);

    colCode.innerHTML = product.getCode();
    colName.innerHTML = product.getName();
    colQuantity.innerHTML = product.getQuantity();
    colCost.innerHTML = product.getCost();

    this._addActionButtons(colAction, product);
    document.querySelector("#total").innerHTML = this._showTotal();    

}

_addActionButtons(column, products) {
    let btnUpdate = document.createElement("input");
    let btnDelete = document.createElement("input");

    btnUpdate.setAttribute("type", "button");
    btnUpdate.setAttribute("value", "Modificar");
    btnUpdate.setAttribute("id", `btnU${products.getId()}`);

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "Borrar");
    btnDelete.setAttribute("id", `btnD${products.getId()}`);

    btnUpdate.addEventListener("click", () => {
      this._onUpdate(products);
    });

    btnDelete.addEventListener("click", () => {
      this._onDelete(products);
    });

    column.appendChild(btnUpdate);
    column.appendChild(btnDelete);
  }

  _onDelete(products) {
    let row = document.querySelector(`#row${products.getId()}`);
    let cost = document.querySelector(`#colCost${products.getCost()}`);
    row.remove();

    let pos = this._find(products);
    let costPos = this._registry[pos];
    
    console.log(costPos._cost);
    document.querySelector("#total").innerHTML = document.querySelector("#total").innerHTML - (costPos._cost * costPos._unity);
    document.querySelector("#iva").innerHTML = document.querySelector("#iva").innerHTML - (costPos._cost * costPos._unity) * 0.16;
    document.querySelector("#subTotal").innerHTML = document.querySelector("#subTotal").innerHTML - (costPos._cost * costPos._unity) * 0.84;
    this._registry.splice(pos, 1);

    return cost;
  }

  _onUpdate(products) {
    let colName = document.querySelector(`#colName${products.getId()}`);
    let colUnity = document.querySelector(`#colUnity${products.getId()}`);
    let colCost = document.querySelector(`#colCost${products.getId()}`);

    colName.innerHTML = " ";
    colUnity.innerHTML = "";
    colCost.innerHTML = "";

    let inpName = document.createElement("input");
    let inpUnity = document.createElement("input");
    let inpCost = document.createElement("input");

    inpName.setAttribute("type", "text");
    inpName.setAttribute("size", "35");
    inpName.setAttribute("value", products.getName());
    inpName.setAttribute("id", `inpName${products.getId()}`);

    inpUnity.setAttribute("type", "number");

    inpUnity.setAttribute("value", products.getUnity());
    inpUnity.setAttribute("id", `inpUnity${products.getId()}`);

    inpCost.setAttribute("type", "number");

    inpCost.setAttribute("value", products.getCost());
    inpCost.setAttribute("id", `inpCost${products.getId()}`);

    colName.appendChild(inpName);
    colUnity.appendChild(inpUnity);
    colCost.appendChild(inpCost);

    this._addUpdateCancelButtons(products);
  }

  _addUpdateCancelButtons(products) {
    let colActions = document.querySelector(`#colActions${products.getId()}`);

    colActions.innerHTML = "";

    let btnSave = document.createElement("input");
    let btnCancel = document.createElement("input");

    btnSave.setAttribute("type", "button");
    btnSave.setAttribute("value", "Grabar");
    btnSave.setAttribute("id", `btnS${products.getId()}`);

    btnCancel.setAttribute("type", "button");
    btnCancel.setAttribute("value", "Cancelar");
    btnCancel.setAttribute("id", `btnC${products.getId()}`);

    colActions.appendChild(btnSave);
    colActions.appendChild(btnCancel);

    btnSave.addEventListener("click", () => {
      this._onSave(products);
    });

    btnCancel.addEventListener("click", () => {
      this._onCancel(products);
    });
  }

  _onCancel(products) {
    let colName = document.querySelector(`#colName${products.getId()}`);
    let colUnity = document.querySelector(`#colUnity${products.getId()}`);
    let colCost = document.querySelector(`#colCost${products.getId()}`);
    let colSubTotal = document.querySelector("#subTotal");
    let colIva = document.querySelector("#iva");
    let colTotal = document.querySelector("#total");
    let colActions = document.querySelector(`#colActions${products.getId()}`);

    colName.innerHTML = products.getName();
    colUnity.innerHTML = products.getUnity();
    colCost.innerHTML = products.getCost();
    colSubTotal.innerHTML = this._showSubTotal();
    colIva.innerHTML = this._showIva();
    colTotal.innerHTML = this._showTotal();
    colActions.innerHTML = "";

    this._addActionButtons(colActions, products);
  }

  _onSave(products) {
    let name = document.querySelector(`#inpName${products.getId()}`).value;
    let unity = document.querySelector(`#inpUnity${products.getId()}`).value;
    let cost = document.querySelector(`#inpCost${products.getId()}`).value;

    products.setName(name.toUpperCase());
    products.setUnity(Number(unity));
    products.setCost(Number(cost));

    this._onCancel(products);
  }

_find(product) {
    let pos = this.registry.findIndex((p) => {
        if(p.getCode() === product.getCode()) {
            return true;
        }

        return false;
    });

    return pos;
}

}