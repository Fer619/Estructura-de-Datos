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

   

}