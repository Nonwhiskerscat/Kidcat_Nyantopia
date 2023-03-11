function ballCount(input1, input2, len){
    let count=0;
    for(let k=0;k<len;k++){
        for(let l=0;l<len;l++){
            if(input1[k]==input2[l]){
                count++;
                if(k==l) {
                    count--;
                }
            }
        }
    }
    return count;
}