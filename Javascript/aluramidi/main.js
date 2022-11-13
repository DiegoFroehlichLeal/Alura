function playSound(audioSelector) {
    const component = document.querySelector(audioSelector);

    if (component && component.localName === 'audio') {
        component.play();
    } else {
        console.log('Elemento não encontrado')
    }
}
const keysList = document.querySelectorAll('.tecla');
for (const element of keysList) {
    const Key = element;
    const MusicInstrument = Key.classList[1];
    const idAudio = `#som_${MusicInstrument}`;
    Key.onclick = function () {
        playSound(idAudio);
    }

    Key.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            Key.classList.add('ativa');
        }
    }
    Key.onkeyup = function () {

        Key.classList.remove('ativa');
    }
}