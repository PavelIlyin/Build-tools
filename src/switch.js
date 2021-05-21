const calcClickEl = document.querySelector('.calcClick');
const timerClickEl = document.querySelector('.timerClick');

const datecalcEL = document.querySelector('.datecalc__block');
const timerEl = document.querySelector('.timer__block');

calcClickEl.addEventListener('click', switchHandlerCalc);

function switchHandlerCalc(event) {
    datecalcEL.classList.remove('hidden');
    timerEl.classList.add('hidden');
}

timerClickEl.addEventListener('click', switchHandlerTimer);

function switchHandlerTimer(event) {
    datecalcEL.classList.add('hidden');
    timerEl.classList.remove('hidden');
}


/*calcClickEl.addEventListener('click', switchCalc);
timerClickEl.addEventListener('click', switchCalc);

function switchCalc(event) {
    datecalcEL.classList.toggle('hidden');
    timerEl.classList.toggle('hidden');
}*/