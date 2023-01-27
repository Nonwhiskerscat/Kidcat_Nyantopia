function inputMaker(cat) {
    const inkitty= document.querySelector('.kitty');
    let link='';
    link +='<div class="kitty_flex">';
    for(let i=0;i<cat;i++) {
        link+=
        `<div class=kitties>
        <input id="catnum" class="neo num_${i+1}" type="text" maxlength="1" autocomplete="off">
        </div>`;
    }

    link+='</div>';
    inkitty.innerHTML=link;
    
}
