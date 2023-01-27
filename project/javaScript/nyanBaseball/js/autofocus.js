function firstFocus() {
    const kidcat=document.querySelector('#catnum');
    kidcat.focus();
}

function nextFocus(cat) {
    const nyan = document.querySelector('.kitty');
    document.addEventListener('keyup', function() {
        for(let i=1;i<cat;i++) {
            if(nyan.querySelector(`.num_${i}`).value.length==1) {
                nyan.querySelector(`.num_${i+1}`).focus();
            } 
        }

    })
}