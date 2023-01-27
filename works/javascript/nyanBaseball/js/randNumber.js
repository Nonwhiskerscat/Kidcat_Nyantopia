function randomNumber(){
    return (Math.ceil(Math.random()*10)-1);
}

function numberMaker(len){
    const numArr=[];
    for(let i=0;i<len;i++) {
        numArr[i]=randomNumber();

        for(let j=0;j<i;j++){

            if(numArr[i]==numArr[j])
            {
                i--;
                break;
            }
        }
    }
    return numArr;
}


