function attackCheck(cat) {

    const nyan = document.querySelector('.kitty');

    let attack=[];
    for(let i=0;i<cat;i++) {
        let meow = Number(nyan.querySelector(`.num_${i+1}`).value);

        for(let j=0;j<i;j++) {
            if(meow==attack[j]) {
                alert('중복되는 숫자가 있습니다. 다시 입력해 주세요!');
                i--;
            }

            else {
                attack.push(meow);
            }
        }
    }
    return attack;
}
