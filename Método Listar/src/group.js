

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
            elim = this.head;
            this.head = this.head.next;
            return elim;
        } else {
            let prev = this.head;
            let nex = this.head.next;
            while(nex != null) {
                if(nex.id == id) {
                    prev.next = prev.next.next;
                    elim = nex;
                    elim.next = null;
                    return elim;
                } else {
                    prev = nex;
                    nex = nex.next;
                }
            }
            return null;
        }
    }
    



}


let g3 = new Group();
let p1 = new People(19, 'Fernando');
g3.add(p1);
p1 = new People(20, 'Luis');
g3.add(p1);
p1 = new People(21, 'Lopez');
g3.add(p1);
p1 = new People(22, 'Ana');
g3.add(p1);
p1 = new People(23, 'Ramon');

console.log(g3.toList());

let f = g3.find(79);
if(f==null){
    console.log('No existe el id ingresado');
} else { 
    console.log(f.showInfo());
}

let d = g3.delete(21);
if(d == null){
    console.log('No existe el id ingresado')
    } else {
        console.log('Se elimino' + d.showInfo());
    }

