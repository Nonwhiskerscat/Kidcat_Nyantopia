function totalScore(cat) {
    let score=0;
    switch(cat) {
        case 2:
        score=2000;
        break;

        case 3:
        score=5000;
        break;

        case 4:
        score=10000;
        break;

        case 5:
        score=20000;
        break;

        case 6:
        score=40000;
        break;

        case 7:
        score=70000;
        break;

        default: score=100000;
        
    }
    
    return score;
}

