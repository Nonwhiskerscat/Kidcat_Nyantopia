function outField(neko, meow, kidcat, play) {
    const outres=document.getElementById('outer');
    const comm$=document.getElementById('common_con');
    const commYes=comm$.querySelector('.con_btn .yes');

    let score=neko;
    let newarr=[...kidcat];

    if(outres.querySelector('.store_btn').classList.contains('sold')) {
        alertCommon(6);
    }
    
    else if(score<=5000)
        alertCommon(4);

    else {
        confirmCommon(3, score, meow, newarr, play);
    }

    if(commYes.classList.contains('outFd')) score-=5000;

    return score;
}

function inField(neko, meow, kidcat, play) {
    const inneres=document.getElementById('inner');
    const comm$=document.getElementById('common_con');
    const commYes=comm$.querySelector('.con_btn .yes');

    let score=neko;
    let newarr=[...kidcat];

    if(inneres.querySelector('.store_btn').classList.contains('sold')) {
        alertCommon(6);
    }
    
    else if(score<=8000)
        alertCommon(4);


    else {
        confirmCommon(4, score, meow, newarr, play);

    }

    if(commYes.classList.contains('inFd')) score-=8000;

    return score;
}

function tableSeat(neko, meow, kidcat, play) {
    const tables=document.getElementById('table');
    const comm$=document.getElementById('common_con');
    const commYes=comm$.querySelector('.con_btn .yes');

    let score=neko;
    let newarr=[...kidcat];
    
    if(tables.querySelector('.store_btn').classList.contains('sold')) {
        alertCommon(6);
    }
    
    else if(meow<4) {
        alertCommon(5);
    }

    else if(score<=20000)
        alertCommon(4);

    else {
        confirmCommon(5, score, meow, newarr, play);
    }

    if(commYes.classList.contains('tableSt')) score-=20000;

    return score;
}