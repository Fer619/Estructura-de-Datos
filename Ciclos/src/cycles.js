export default class Cycles {
    constructor(E, S) {
        this.e = E;
        this.S = S;
    }

    ecuationS() {
        let s= 4;

        for(let i= 3; i <= this.S; i= i + 2) {
            s = s - this.dividentCalculation(i);
        }

        return (`S = ${s}`);
    }

    dividentCalculation(divident) {
        let ecuation = 4 / divident;
        return ecuation;
    }

    ecuationE() {
        let E= 1;

        for(let i= 1; i <= this.e; i++) {
            E = E + this.dividentCalculationE(i);

        }

        return (`e = ${E}`);
    }

    dividentCalculationE(divident) {
        let fraction = 1/this.dFactorialE(divident);
        return fraction;
    }

    dFactorialE(divident) {
        let result = divident;

        for(let i = 1; i < divident; i++) {
            result = result * i;

        }

        return result;

    }
}