export default class Dice {
constructor(launch, result) {
    this.launch = launch;
    this.result = result;
}

result () {
    return Math.ceil(Math.random()*6);
}

launch () {
    let d = new Dado()
    for(let i= 1; i <= 1000; i++) {
        
        let round = launchDice();

        switch(round) {
            case 1:
                1++
                break;
            case 2:
                2++
                break;
            case 3:
                3++
                break;
            case 4:
                4++
                break;
            case 5:
                5++
                break;
            case 6:
                6++
                break;
        }

    }
}

  
}