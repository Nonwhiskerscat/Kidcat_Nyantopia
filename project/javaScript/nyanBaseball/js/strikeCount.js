function strikeCount(input1, input2, len){
    let count=0;
    for(let k=0;k<len;k++){
        for(let l=0;l<len;l++){
            if(input1[k]==input2[l]){
                if(k==l) {
                    count++;
                }
            }
        }
    }

    if(len-count==1&&len>2) {
        alertCommon(3, count);
    }
    
    return count;
}