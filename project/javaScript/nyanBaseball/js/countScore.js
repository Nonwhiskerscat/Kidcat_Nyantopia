function countScore(cat) {
    let score=0;
    switch(cat) {
        case 2:
        score=100;
        break;

        case 3:
        score=120;
        break;

        case 4:
        score=150;
        break;

        case 5:
        score=200;
        break;

        case 6:
        score=250;
        break;

        case 7:
        score=300;
        break;

        default: score=400;
        
    }

    
    return score;
}

