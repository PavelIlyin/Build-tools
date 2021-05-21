//1 вариант:

//export function soundClick() {
//    let audio = new Audio();
//    audio.src = 'src/sound/timer-bell.mp3'; 
//    audio.autoplay = true;
//    audio.repeat = false;
//}

//2 вариант:

export function soundClick() {
    let form = document.querySelector('.stop__btn');
    form.innerHTML = '<audio src="/src/sound/timer-bell.mp3" autoplay></audio>';
}