const sprite = document.getElementById('sprite');
let frameIndex = 0;

const barraProgreso = document.getElementById('barra-progreso');
const cantidadProgreso = document.getElementById('cantidad-progreso');
let progreso = Math.floor(Math.random()*100);

const intervalo = setInterval(() => {
    progreso++;
    const porcentaje = `${progreso}%`;
    barraProgreso.style.width = porcentaje;
    cantidadProgreso.innerHTML = porcentaje;
    progreso = progreso % 100;
}, 300);

function changeSprite(spriteClass){
    sprite.className = spriteClass 
}

function changeSpriteMomently(spriteClass){ 
    changeSprite(spriteClass)  
    setTimeout(function(){ 
        changeSprite('pinguino')
    }, 3000);

}

function animarPingüino(totalFrames, frameWidth, frameHeight) {
    const offsetX = -frameIndex * frameWidth;
    pinguino.style.backgroundPosition = `${offsetX}px 0`;
    frameIndex = (frameIndex + 1) % totalFrames;
}

function andarIz() {
    animarPingüino(8, 150, 150);
}

function andarDer() {
    animarPingüino(8, 150, 150);
}

function meon() {
    animarPingüino(13, 152, 150);
}

function voltereta() {
    animarPingüino(10, 152, 150);
}

function Kieto() {
    animarPingüino(13, 115, 150);
}

function gym() {
    animarPingüino(8, 115, 150);
}
function trompetero() {
    animarPingüino(12, 150, 150);
}
function sorpresa() {
    animarPingüino(2, 150, 150);
}
