import { formatError } from './common.js';
import { diffDates, diffToHTML } from './diffDates.js';

const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc__result');

dateCalcForm.addEventListener('submit', handleCalcDate);

function handleCalcDate(event) {
    event.preventDefault();
    dateCalcResult.innerHTML = '';

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        dateCalcResult.innerHTML = diffToHTML(diffDates(firstDate, secondDate));
    } else {
        dateCalcResult.innerHTML = formatError('Для рассчета промежутка необходимо заполнить оба поля');
    }
}