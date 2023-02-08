const tittle = document.querySelector('h1');

function changedTitle (text, secondsAdd) {
    setTimeout(() => {
        tittle.innerHTML = text;
    }, 3000 * secondsAdd);
}

for (let i = 1; i < 100 ; i++) {
    changedTitle ('Criamos Peças', i);
    i++;
    changedTitle ('Criamos Acabamentos', i);
    i++;
    changedTitle ('Criamos Soluções', i);
}

