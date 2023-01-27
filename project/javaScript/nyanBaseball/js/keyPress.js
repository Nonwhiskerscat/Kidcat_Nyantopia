function inputEnter() {
    
    const cont=document.querySelector('.container');
    const stop=document.getElementById('catnum')

    window.addEventListener('keyup', function(e) {
        const attack=document.getElementById('kidcat2');
        if(e.keyCode==13) {
            if(cont.style.touchAction!='none'&&stop.disabled==false) {
                attack.click();
            }
        }   
    });
}
