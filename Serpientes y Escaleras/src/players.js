export default class Players {
    constructor(player1, player2){ 
    this.position = new Array;
    this.player1 = player1;
    this.player2 = player2
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