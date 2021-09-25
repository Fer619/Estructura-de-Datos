export default class Inventary {
    cosntructor (){
        this.datos = new Array();
    }

    addProduct(nuevo) {
        this.datos.push(nuevo);
    }

    searchCode(code) {
        let pos = null

        for(let i = 0; (i < this.datos.length) && pos == null; i++)
        if(this.datos[i].datos == code){
            pos= this.datos[i];
            return pos;
        }
        
    }

    _findPos(code) {
        let pos = -1
        for(let i = 0; (i < this.datos.length) && pos == -1; i++)
        if(this.datos[i].datos == code){
            pos= i;
            return pos;
        }
        
    }

    
}