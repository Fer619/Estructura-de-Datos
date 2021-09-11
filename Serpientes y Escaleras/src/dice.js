export default class Dice {
    constructor(lanzar) {
        this.lanzar = lanzar;

    }

    lanzar() {
        return Math.ceil(Math.random()* 6);
    }
}