function gameBoard(cat, kitty, kidcat1, kidcat2, kidcat3) {

    const nyan=document.querySelector('.part4 tbody');

    const kidcat0 = kitty.join('');


    rowNyan = document.createElement('TR');
    nyan.appendChild(rowNyan);

    cellNyan = document.createElement('TD');
    cellNyan.innerHTML = cat;
    rowNyan.appendChild(cellNyan);

    cellNyan = document.createElement('TD');
    cellNyan.innerHTML = kidcat0;
    rowNyan.appendChild(cellNyan);

    cellNyan = document.createElement('TD');
    cellNyan.innerHTML = kidcat1;
    rowNyan.appendChild(cellNyan);

    cellNyan = document.createElement('TD');
    cellNyan.innerHTML = kidcat2;
    rowNyan.appendChild(cellNyan);

    cellNyan = document.createElement('TD');
    cellNyan.innerHTML = kidcat3;
    rowNyan.appendChild(cellNyan);
    
}