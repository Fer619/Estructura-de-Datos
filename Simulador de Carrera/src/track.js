import Dice from './dice.js';

class runningTrack{

    constructor(dice, runnerA, runnerB, square) {
        this.dice = dice;
        this.runnerA = runnerA;
        this.runnerB = runnerB;
        this.square= square;
    }

    square() {
        let track= 100;

        while(this.runnerA || this.runnerB < track) {

            if(this.runnerA && this.runnerB > track){
                console.log("El resultado es un empate");
            }
            else if(this.runnerA > track && this.runnerB < track) {
                console.log("El ganador es el corredor A");
            }
            else if(this.runnerB > track && this.runnerA < track) {
                console.log("El ganador es el corredor B");
            }
            else false;
            
        }
    }

   
}