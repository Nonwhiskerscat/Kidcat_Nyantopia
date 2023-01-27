function strikeScore(cat) {
    let score=0;

    switch(cat) {
        case 2: case 8:
        score=20;
        break;

        case 3: case 7:
        score=30;
        break;

        case 4: case 6:
        score=50;
        break;

        default: score=80;
        
    }
    
    return score;
}