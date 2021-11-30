export default class Lista {
    cosntructor (){
        this.inicio = null;
        this.length= 0;
    }

    agregar(base){
        if(this.inicio===null){
            this.inicio=base;
            base.next=this.inicio;
            base.previous=this.inicio;
            this.length++;

        } else {
            let last=this.inicio.previous;
            base.next=this.inicio;
            base.previous=last;
            last.next=base;
            this.inicio.previous=base;
            this.length++;
        }

    }

    borrar(base) {
        let del;
        let last;
        let next;

        if(!this.inicio){
            return null;
        } else if(this.inicio.getName() === base && this.length===1) {
            del=this.inicio;
            this.inicio=null;
            del.next=null;
            del.previous=null;
            this.length--;
            return del;
        } else if(this.inicio.getName() === base){
            del= this.inicio;
            last= del.previous;
            next=del.next;
            this.inicio=next;
            this.inicio.previous=last;
            last.next=this.inicio;
            del.previous=null;
            del.next=null;
            this.length--;
            return del;
        } else{
            let prev=this.inicio;
            let curr=this.inicio.next;
            while(curr !== this.inicio){
                if(curr.getName() === base && curr.next === this.inicio){
                    del=curr;
                    next=del.next;
                    prev.next=next;
                    next.previous=prev;
                    del.next=null;
                    del.previous=null;
                    this.length--;
                    return del;
                } else if(curr.getName() === base){
                    del=curr;
                    next=del.next;
                    prev.next=next;
                    next.previous=prev;
                    del.next=null;
                    del.previous=null;
                    this.length--;
                    return del;
                } else{
                    prev.curr;
                    curr.curr.next;
                }
            }

            return null;

        }
    }  
    
    
    listar() {
        let txt='';
        let base=this.inicio;

        if(!base){
            txt= 'No hay ninguna base registrada.';
            return txt;
        } else{
            do{
                txt += base.info() + '\n' + '------------------------------';
                base=base.next;
            }while(base != this.inicio);
        }
        return txt;
    }

    createCard(base, hour, minutes) {
        let card = '';
        let minHour = 0;
        let find = this._search(base);
    

    if(!find) {
        return null;;
    } else {
        while(minutes >= 0) {
            card += find.cardInfo(this._getHour(hour, minHour), minutes) + '\n' + '------------------------------';
            minHour += find.next.getMinutes();
            minutes -= find.next.getMinutes();
            find = find.next;
        }
        return card;
    }
}

_search(nameBase) {
    let base = this.start;

    if(!base) {
        return null;
    }

    do {
        if(base.getName() === nameBase) {
            return base;
        } else {
            base = base.next;
        }
    } while(base !== this.start);
    return null;
}

_getHour(hour, minutes) {
    let hourToMinutes = ((hour * 60) + minutes)/60;
    let totalHours = Math.trunc(hourToMinutes);
    let lessMinutes = Math.round((hourToMinutes - totalHours)*60);

    if(lessMinutes < 10) {
        return '${totalHours}:0${lessMinutes}';
    } else {
        return '${totalHours}:${lessMinutes}';
    }
}


   

}