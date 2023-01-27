function clear(cat) {
    const nyan = document.querySelector('.kitty');
    for(let i=0;i<cat;i++) {
        nyan.querySelector(`.num_${i+1}`).value='';
    }
}