function confirmCommon(cat, catscore, catlength, kidcat, count) {
    const comm$=document.getElementById('common_con');
    const commH4=comm$.querySelector('.contbx h4');
    // const commImg=comm$.querySelector('.alertbx img')
    const commNtc=comm$.querySelector('.contbx .notice1');
    const commNtc2=comm$.querySelector('.contbx .notice2');
    const commYes=comm$.querySelector('.con_btn .yes');
    const commNo=comm$.querySelector('.con_btn .nope');

    const lolly=cat;
    let score=catscore;
    let comAttack=[...kidcat];
    let play=count;
    let length=catlength;

    comm$.classList.remove('no');
    document.body.classList.add('no_scroll');
    document.querySelector('.container').style.touchAction='none';
    

    if(lolly==1) {
        commH4.innerHTML='Give Up';
        commNtc.innerHTML=`정말로 포기하시겠습니까?`;
        commNtc2.innerHTML=`포기하실 경우 획득 점수와 <br>기록이 모두 사라집니다.`;
    }

    if(lolly==2) {
        commH4.innerHTML='Retry';
        commNtc.innerHTML=`게임을 다시 시작하시겠습니까?`;
        commNtc2.innerHTML=`점수 및 기록은 <br>저장되지 않습니다.`;
    }

    if(lolly==3) {
        commH4.innerHTML='Out Field';
        commNtc.innerHTML=`외야석 힌트를 사용하시겠습니까?`;
        commNtc2.innerHTML=`외야석 힌트는 <br>임의의 숫자 2개가 공개됩니다.`;
    }

    if(lolly==4) {
        commH4.innerHTML='In Field';
        commNtc.innerHTML=`내야석 힌트를 사용하시겠습니까?`;
        commNtc2.innerHTML=`내야석 힌트는 <br>임의의 숫자 1개와 위치가 공개됩니다.`;
    }

    if(lolly==5) {
        commH4.innerHTML='Table Seat';
        commNtc.innerHTML=`테이블석 힌트를 사용하시겠습니까?`;
        commNtc2.innerHTML=`테이블석 힌트는 <br>임의의 숫자 2개와 위치가 공개됩니다.`;
    }

    score=commYes.addEventListener('click', function(){

        switch(lolly) {
            case 1:             
                endGame(0, 0, -1, length, comAttack, play);
                break;

            case 2:
                location.reload();
                break;

            case 3:
                commYes.classList.add('outFd');
                score=alertResult(6, score, comAttack, 0);
                break;

            case 4:
                commYes.classList.add('inFd');
                score=alertResult(7, score, comAttack, 0);
                break;

            default:
                commYes.classList.add('tableSt');
                score=alertResult(8, score, comAttack, 0);

        }

        comm$.classList.add('no');
        document.body.classList.remove('no_scroll');
        document.querySelector('.container').style.touchAction='auto';

        

    }, );





    commNo.addEventListener('click', function(){

        comm$.classList.add('no');
        document.body.classList.remove('no_scroll');
        document.querySelector('.container').style.touchAction='auto';
    });

}