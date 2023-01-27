    function countMaker(cat) {

        const nyan = document.querySelector('.ball_count');
        const meow = document.querySelector('.strike_count');

    
        let bcircle='';
        let scircle='';

        for(let i=0;i<cat;i++) {
            bcircle+=`<li class="circle" id="bcircle_${i+1}"></li>`
        }

        for(let i=0;i<cat-1;i++) {
            scircle+=`<li class="circle" id="scircle_${i+1}"></li>`
        }

        nyan.innerHTML=bcircle;
        meow.innerHTML=scircle;
    }
