function alertResult(cat, escore, earr, etry) {
    const rst$=document.getElementById('result_alt');
    const rstH4=rst$.querySelector('.alertbx h4');
    const rstImg=rst$.querySelector('.alertbx img')
    const rstNtc=rst$.querySelector('.alertbx .notice');
    const rstTitle=rst$.querySelectorAll('.alertbx .scorebox h5');
    const rstScore=rst$.querySelector('.ts p');
    const rstTrial=rst$.querySelector('.tt p');
    const rstRes=rst$.querySelector('.tr p');
    const rstCls=rst$.querySelector('.cls h6');
    const rstScr=rst$.querySelector('.scorebox');
    const outres=document.getElementById('outer');
    const inneres=document.getElementById('inner');
    const tables=document.getElementById('table');



    const lolly=cat;
    let score=escore;
    const com=earr;
    const trial=etry;
    const arrKor=['첫', '두', '세', '네', '다섯', '여섯', '일곱', '여덟'];


    let n1=Math.floor(Math.random()*com.length);
    let n2=Math.floor(Math.random()*com.length);

    while(n1==n2) {
        n2=Math.floor(Math.random()*com.length);
    }

    rst$.classList.remove('no');
    document.body.classList.add('no_scroll');
    document.querySelector('.container').style.touchAction='none';
    
    if(lolly==1) {
        rstH4.innerHTML=`CLEAR`;
        rstImg.src='../img/alert/catclear.png';
        rstNtc.innerHTML=`축하드립니다. <br>공격에 성공하셨습니다.`;
    }

    else if(lolly==6) { 
        rstH4.innerHTML=`Out Field`;
        rstImg.src='../img/alert/cat.png';
        rstNtc.innerHTML=`${com[n1]}, ${com[n2]}`;
        rstScr.style.display="none";
        outres.querySelector('.store_btn').classList.add('sold');
        outres.querySelector('.price').style.display='none';
        outres.querySelector('.sold_out').style.display='block';
        score-=5000;

    }

    else if(lolly==7) {
        rstH4.innerHTML=`In Field`;
        rstImg.src='../img/alert/cat.png';
        rstNtc.innerHTML=`${arrKor[n1]} 번째 숫자는 ${com[n1]}`;
        rstScr.style.display="none";
        inneres.querySelector('.store_btn').classList.add('sold');
        inneres.querySelector('.price').style.display='none';
        inneres.querySelector('.sold_out').style.display='block';

    }

    else if(lolly==8) {
        rstH4.innerHTML=`Table Seat`;
        rstImg.src='../img/alert/cat.png';
        rstNtc.innerHTML=`
        ${arrKor[n1]} 번째 숫자는 ${com[n1]}<br>
        ${arrKor[n2]} 번째 숫자는 ${com[n2]}<br>
        `;
        rstScr.style.display="none";
        tables.querySelector('.store_btn').classList.add('sold');
        tables.querySelector('.price').style.display='none';
        tables.querySelector('.sold_out').style.display='block';
    }

    else {
        rstH4.style.color='#ff0000';
        [].forEach.call(rstTitle, function(rstTitle) {
            rstTitle.style.color='#ff0000';
        })
        rstH4.innerHTML=`Failed`;
        rstImg.src='../img/alert/catfailed.png';

        if(lolly==2) {
            rstNtc.innerHTML=`중도 포기로 인해 <br>공격에 실패하였습니다.`;
        }

        if(lolly==3) {
            rstNtc.innerHTML=`쓰리 아웃으로 인해 <br>공격에 실패하였습니다.`;
        }

        if(lolly==4) {
            rstNtc.innerHTML=`보유 점수 파산으로 인해 <br>공격에 실패하였습니다.`;
        }

    }

    rstScore.innerHTML=score;
    rstTrial.innerHTML=trial;
    rstRes.innerHTML=com;



    rstCls.addEventListener('click', function() {
        rst$.classList.add('no');
        document.body.classList.remove('no_scroll');
        document.querySelector('.container').style.touchAction='auto';

    })

    return score;
    
}

function alertCommon(cat, meow, nyan) {
    const rst$=document.getElementById('common_alt');
    const rstH4=rst$.querySelector('.alertbx h4');
    const rstImg=rst$.querySelector('.alertbx img')
    const rstNtc=rst$.querySelector('.alertbx .notice');
    const rstStr=rst$.querySelector('.alertbx .store');
    const rstCls=rst$.querySelector('.cls h6')

    const lolly=cat;
    const myStrike=meow;
    const strArr=['두', '세', '네', '다섯', '여섯', '일곱'];
    const myOut=nyan;
    const outArr=['One', 'Two'];

    rst$.classList.remove('no');
    document.body.classList.add('no_scroll');
    document.querySelector('.container').style.touchAction='none';
    

    if(lolly==1) {
        rstH4.innerHTML='Game Start!';
        rstImg.src='../img/alert/cat.png';
        rstNtc.innerHTML=`게임을 시작합니다.`;
    }

    if(lolly==2) {
        rstH4.innerHTML=`${outArr[myOut-1]} Out`;
        rstImg.src='../img/alert/catout.png';
        rstNtc.innerHTML=`일치하는 숫자가 없어 <br>아웃을 당하셨습니다.`;
    }

    if(lolly==3) {
        rstH4.innerHTML=`${myStrike} Strike`;
        rstImg.src='../img/alert/cathappy.png';
        rstNtc.innerHTML=`${strArr[myStrike-2]} 개의 스트를 잡았습니다.! <br> 마지막까지 파이팅!`;
    }

    if(lolly==4) {
        rstH4.innerHTML=`Warning`;
        rstImg.src='../img/alert/catout.png';
        rstNtc.innerHTML=`점수가 부족하여 <br> 아이템 구매를 할 수 없습니다..`;
    }

    if(lolly==5) {
        rstH4.innerHTML=`Warning`;
        rstImg.src='../img/alert/catout.png';
        rstNtc.innerHTML=`공격 숫자가 4자리 이상인<BR>경우에만 사용 가능합니다.`;
    }

    if(lolly==6) {
        rstH4.innerHTML=`Warning`;
        rstImg.src='../img/alert/catout.png';
        rstNtc.innerHTML=`이미 판매가 완료된 힌트입니다.`;
    }



    rstCls.addEventListener('click', function() {
        rst$.classList.add('no');
        document.body.classList.remove('no_scroll');
        document.querySelector('.container').style.touchAction='auto';

    });

}