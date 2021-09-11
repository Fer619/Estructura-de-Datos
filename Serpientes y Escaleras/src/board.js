import Players from "./players.js";
import Dice from "./dice.js";
export default class Board {

constructor(ladders, snakes) {
    this.ladders = ladders;
    this.snakes = snakes;
}

ladders(){
    switch(this.position) {
        case 5:
            this.position(5, 58);
            break;
        case 14:
            this.position(14, 49);
            break;
        case 53:
            this.position(53, 72);
                break;
        case 64:
            this.position(64, 83);
                break;               
            
       
    }

}

    snakes(){
        switch(this.position) {
            case 38:
                this.position(38, 20);
                break;
            case 51:
                this.position(51, 10);
                break;
            case 76:
                this.position(76, 54);
                    break;
            case 91:
                this.position(91, 73);
                    break;


        }    
                    
}


}




