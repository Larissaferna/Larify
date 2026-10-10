const vinil = document.getElementById("vinil");
const braco = document.getElementById("braco");
const botaoEntrar = document.getElementById("botaoEntrar");
const musicaVinil = document.getElementById("musicaVinil");

let agulhaNoDisco = false;

let arrastandoVinil = false;
let arrastandoAgulha = false;

let ultimoAngulo = 0;
let rotacaoManual = 0;



function iniciarDisco() {
    if (!agulhaNoDisco) return;

    vinil.classList.add("girando");

    musicaVinil.play().catch(function (erro) {
        console.log("Não foi possível iniciar o áudio:", erro);
    });
}

function pararDisco() {
    vinil.classList.remove("girando");

    musicaVinil.pause();
}



braco.addEventListener("pointerdown", function (evento) {

    evento.preventDefault();
    evento.stopPropagation();

    arrastandoAgulha = true;

    braco.setPointerCapture(evento.pointerId);

    pararDisco();
});


braco.addEventListener("pointermove", function (evento) {

    if (!arrastandoAgulha) return;

    const toca = document.querySelector(".toca_discos");
    const rect = toca.getBoundingClientRect();

    const mouseX = evento.clientX - rect.left;
    const mouseY = evento.clientY - rect.top;
    const limiteX = Math.max(
        80,
        Math.min(mouseX, rect.width - 80)
    );

    const limiteY = Math.max(
        60,
        Math.min(mouseY, rect.height - 60)
    );

    const centroX = rect.width * 0.50;
    const centroY = rect.height * 0.50;

    const diferencaX = limiteX - centroX;
    const diferencaY = limiteY - centroY;

    let angulo =
        Math.atan2(diferencaY, diferencaX) * 180 / Math.PI;

    /*
       O braço gira a partir do seu ponto
       de apoio.
    */

    angulo += 180;

    braco.style.transform =
        `rotate(${angulo}deg)`;
});


braco.addEventListener("pointerup", function (evento) {

    if (!arrastandoAgulha) return;

    arrastandoAgulha = false;

    braco.releasePointerCapture(evento.pointerId);

    verificarAgulha();
});


braco.addEventListener("pointercancel", function () {

    arrastandoAgulha = false;
});


function verificarAgulha() {

    const agulha = document.querySelector(".cabeca_agulha");

    const agulhaRect = agulha.getBoundingClientRect();
    const vinilRect = vinil.getBoundingClientRect();

    const agulhaX =
        agulhaRect.left + agulhaRect.width / 2;

    const agulhaY =
        agulhaRect.top + agulhaRect.height / 2;

    const centroX =
        vinilRect.left + vinilRect.width / 2;

    const centroY =
        vinilRect.top + vinilRect.height / 2;

    const distancia = Math.sqrt(
        Math.pow(agulhaX - centroX, 2) +
        Math.pow(agulhaY - centroY, 2)
    );

    const raioVinil = vinilRect.width / 2;

    if (distancia < raioVinil * 0.92) {

        agulhaNoDisco = true;

        braco.classList.remove("no_disco");

        iniciarDisco();

    } else {

        agulhaNoDisco = false;

        braco.classList.add("no_disco");

        pararDisco();
    }
}


function calcularAngulo(evento) {

    const rect = vinil.getBoundingClientRect();

    const centroX =
        rect.left + rect.width / 2;

    const centroY =
        rect.top + rect.height / 2;

    const x = evento.clientX - centroX;
    const y = evento.clientY - centroY;

    return Math.atan2(y, x) * 180 / Math.PI;
}


vinil.addEventListener("pointerdown", function (evento) {

    if (arrastandoAgulha) return;

    arrastandoVinil = true;

    vinil.setPointerCapture(evento.pointerId);

    ultimoAngulo = calcularAngulo(evento);

    vinil.classList.remove("girando");
});


vinil.addEventListener("pointermove", function (evento) {

    if (!arrastandoVinil) return;

    const novoAngulo = calcularAngulo(evento);

    let diferenca =
        novoAngulo - ultimoAngulo;

    if (diferenca > 180) {
        diferenca -= 360;
    }

    if (diferenca < -180) {
        diferenca += 360;
    }

    rotacaoManual += diferenca;

    vinil.style.transform =
        `translate(-55%, -50%) rotate(${rotacaoManual}deg)`;

    ultimoAngulo = novoAngulo;
});


vinil.addEventListener("pointerup", function () {

    arrastandoVinil = false;

    if (agulhaNoDisco) {

        vinil.style.transform = "";

        iniciarDisco();

    } else {

        vinil.style.transform =
            `translate(-55%, -50%) rotate(${rotacaoManual}deg)`;
    }
});


botaoEntrar.addEventListener("click", function () {

    botaoEntrar.style.transform = "scale(0.92)";

    setTimeout(function () {

        window.location.href = "spotify.html";

    }, 250);
});