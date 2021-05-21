export function soundClick() {
    let form = document.querySelector('.stop__btn');
    form.innerHTML = '<audio src="/src/sound/timer-bell.mp3" autoplay></audio>';
}