function endGame(escore, eout, estrike, meow, earr, etry) {

    const nyan = document.querySelectorAll('#catnum');
    const kidcat2=document.querySelector('.btn');
    const kidcat3=document.querySelector('.ctn');
    const retire=document.getElementById('kidcat4');

    let score=escore;
    let kitty=[...earr];
    let count=etry;


    if(escore<=0||eout==3||estrike==meow||estrike==-1) {
        if(estrike==meow) {
            score=escore+countScore(meow);
            alertResult(1, score, kitty.join(""), count);
        }

        else {
            score=0;

            for(let i=0;i<meow;i++) {
                document.querySelector(`.num_${i+1}`).value=kitty[i];
            }

            if(estrike==-1) {
                alertResult(2, score, kitty.join(""), count);
                scoreBoard(0);

            }

            else if(eout==3) {
                alertResult(3, score, kitty.join(""), count);
            }

            else{
                alertResult(4, score, kitty.join(""), count);
            }


        }

        [].forEach.call(nyan,function(nyan){
            nyan.classList.add('written');
            kidcat2.classList.add('no');
            kidcat3.classList.remove('no')
            nyan.disabled=true;
        }); 

        return score;

    }

    else {
        for(let i=0;i<meow;i++) {
            document.querySelector(`.num_${i+1}`).value='';
        }
    
        return score;
    
    }


}