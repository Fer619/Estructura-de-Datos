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

   

}