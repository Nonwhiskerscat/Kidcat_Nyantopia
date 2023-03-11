function attackNumber(cat) {

    const nyan = document.querySelector('.kitty');

    let attack=[];
    for(let i=0;i<cat;i++) {
        let meow = Number(nyan.querySelector(`.num_${i+1}`).value);
        if(isNaN(meow)||!nyan.querySelector(`.num_${i+1}`).value) meow='X';

        for(j=0;j<i+1;j++) {
            if(meow==attack[j]) meow='X';
        }

        attack.push(meow);
    }
    
    return attack;
}
