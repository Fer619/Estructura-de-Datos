

class People {
    constructor (id, nombre) {
        this.nombre = nombre;
        this.id = id;
        this.next = null;
    }

    showInfo() {
        return this.id + "=>" + this.nombre;
    }

    
}


class Group {
    constructor(){
        this.head = null;
        this.size = 0;
    }


    add(nuevo) {
        if(this.head == null) {
            this.head = nuevo;
        } else {
            let current = this.head;
            while(current.next !=null){
                current= current.next;
            }
            current.next = nuevo;
        }
    }

    _addFirstAndLast(nuevo, last) {
        if(last.next == null){
            last.next = nuevo;
        } else {
            this._addFirstAndLast(nuevo, last.next);
        }
    }

    toList() {
        let data = '';
        let current = this.head;
        while(current !=null) {
            data += current.showInfo() + "\n"
            current = current.next;
        }
        return data;
    }

    find(id) {
        if(!this.head)
            return null;
        let search = this.head;
        while(search !=null){
            if(search.id==id){
                return search;
            }
            search = search.next
        }
        return null;
    }

    delete(id){
        let elim = null;
        if(!this.head){
            return null
        } if(this.head.id == id) {

        }
    }
    



}