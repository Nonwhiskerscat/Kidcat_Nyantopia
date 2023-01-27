function ballLight(cat) {
    for(let i=1;i<=cat;i++) {
        document.getElementById(`bcircle_${i}`).classList.add('oball');
    }
}

function strikeLight(meow, cat) {
    if(meow!=cat) {
        for(let i=1;i<=cat;i++) {
            document.getElementById(`scircle_${i}`).classList.add('ostrike');
        }
    }
}

function outLight(cat) {
    document.getElementById(`ocircle_${cat}`).classList.add('sout');
}

function offLight() {
    const allBall=document.querySelectorAll('.ball_count li');
    const allStrike=document.querySelectorAll('.strike_count li');

    [].forEach.call(allBall,function(allBall){
        allBall.classList.remove('oball');
    }); 

    [].forEach.call(allStrike,function(allStrike){
        allStrike.classList.remove('ostrike');
    }); 

}


