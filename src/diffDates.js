import { DateTime } from './luxon.js';


export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    }

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const diffToHTML = diff => `
    <span>
        Лет: ${diff.years},
        Месяцев: ${diff.months},
        Дней: ${diff.days}        
    </span>`

export function time(hour, min, sec) {

    if (sec != 0) {
        sec = sec - 1;
        sec = sec < 10 ? '0' + sec : sec;
    } else {
        if (min != 0) {
            min = min - 1;
            sec = 59;
            min = min < 10 ? '0' + min : min;
        } else {
            if (hour != 0) {
                hour = hour - 1;
                min = 59;
                sec = 59;
                hour = hour < 10 ? '0' + hour : hour;
            }
        }
    }
    
    return [hour, min, sec];
}