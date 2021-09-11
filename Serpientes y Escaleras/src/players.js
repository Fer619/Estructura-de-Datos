export default class Players {
    constructor(){ 
    this.position = new Array;
    }

   position() {
       position= 0;
       this.position += position.lanzar();

       
   }

   _rulePosition() {
       if (this.position > 100) {
           this.position= 100 - (this.position-100);
       } else if (this.position = 100) {
           return true;
       } else 
       return false;
   }

   



    
    
}