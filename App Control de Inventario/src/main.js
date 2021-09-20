import Product from "./product.js";
import registryStorage from "./registryStorage.js";

class App {
    constructor() {
        this.registry = new RegistryStorage();
        let btnRegister = document.querySelector('#btnAdd');

        btnRegister.addEventListener('click', this.addProduct);
    }


    _addProduct() {
        let products = products.readForm();


        if(products === false) {
            Swal.fire('ERROR', 'todos los campos son requeridos', 'error')

            return ;
        }

        let added = this.registry.add(products);

        if(added === false) {
            Swal.fire('ERROR', 'el producto ya fue registrado', 'error')

            return ;
        }

        Swal.fire('Listo', 'se ha agregado el producto', 'ready')

    }
}

new App();