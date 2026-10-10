

function irParaSecao(id) {

    const secao =
        document.getElementById(id);

    if (secao) {

        secao.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

        history.replaceState(
            null,
            "",
            "#" + id
        );
    }
}

const botaoTema =
    document.getElementById("botaoTema");

const iconeSol =
    document.getElementById("iconeSol");

const iconeLua =
    document.getElementById("iconeLua");


function aplicarTema(modoClaro) {

    if (modoClaro) {

        document.body.classList.add(
            "modo-claro"
        );


        if (iconeSol) {

            iconeSol.style.display =
                "none";

        }


        if (iconeLua) {

            iconeLua.style.display =
                "inline-block";

        }


        if (botaoTema) {

            botaoTema.setAttribute(
                "aria-label",
                "Ativar modo escuro"
            );

            botaoTema.setAttribute(
                "title",
                "Ativar modo escuro"
            );

        }


        localStorage.setItem(
            "temaPortfolio",
            "claro"
        );


    } else {

        document.body.classList.remove(
            "modo-claro"
        );


        if (iconeSol) {

            iconeSol.style.display =
                "inline-block";

        }


        if (iconeLua) {

            iconeLua.style.display =
                "none";

        }


        if (botaoTema) {

            botaoTema.setAttribute(
                "aria-label",
                "Ativar modo claro"
            );

            botaoTema.setAttribute(
                "title",
                "Ativar modo claro"
            );

        }


        localStorage.setItem(
            "temaPortfolio",
            "escuro"
        );

    }
}

const temaSalvo =
    localStorage.getItem(
        "temaPortfolio"
    );


if (temaSalvo === "claro") {

    aplicarTema(true);

} else {

    aplicarTema(false);

}

if (botaoTema) {

    botaoTema.addEventListener(
        "click",
        function () {

            const estaClaro =
                document.body.classList.contains(
                    "modo-claro"
                );


            aplicarTema(
                !estaClaro
            );

        }
    );

}

const botoesNavegacao =
    document.querySelectorAll(
        "[data-target]"
    );


botoesNavegacao.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const destino =
                    botao.getAttribute(
                        "data-target"
                    );


                if (destino) {

                    irParaSecao(
                        destino
                    );

                }

            }
        );

    }
);

const linksMenu =
    document.querySelectorAll(
        ".link_menu"
    );


linksMenu.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (evento) {

                const destino =
                    link.getAttribute(
                        "href"
                    );


                if (
                    destino &&
                    destino.startsWith("#")
                ) {

                    evento.preventDefault();


                    const id =
                        destino.substring(1);


                    irParaSecao(id);

                }

            }
        );

    }
);

const linksInternos =
    document.querySelectorAll(
        'a[href^="#"]'
    );


linksInternos.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (evento) {

                const destino =
                    link.getAttribute(
                        "href"
                    );


                if (
                    destino &&
                    destino !== "#"
                ) {

                    evento.preventDefault();


                    const id =
                        destino.substring(1);


                    irParaSecao(id);

                }

            }
        );

    }
);


const botaoVejaAgora =
    document.querySelector(
        ".botao_ver_agora"
    );


if (botaoVejaAgora) {

    botaoVejaAgora.addEventListener(
        "click",
        function () {

            const projetos =
                document.getElementById(
                    "projetos"
                );


            if (projetos) {

                projetos.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }
    );

}

const botoesPlay =
    document.querySelectorAll(
        ".botao_play, .cartao_rapido .botao_play"
    );


botoesPlay.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function (evento) {

                evento.stopPropagation();


                const cartao =
                    botao.closest(
                        ".cartao_projeto, .cartao_musica, .cartao_rapido"
                    );


                if (!cartao) {

                    return;

                }


                const titulo =
                    cartao.querySelector(
                        "h3, h4"
                    );


                if (titulo) {

                    console.log(
                        "Abrindo projeto:",
                        titulo.textContent
                    );

                }

            }
        );

    }
);


const modalProjeto =
    document.getElementById(
        "modalProjeto"
    );

const fecharModalProjeto =
    document.getElementById(
        "fecharModalProjeto"
    );

const tituloModalProjeto =
    document.getElementById(
        "tituloModalProjeto"
    );

const descricaoModalProjeto =
    document.getElementById(
        "descricaoModalProjeto"
    );

const acaoModalProjeto =
    document.getElementById(
        "acaoModalProjeto"
    );


function abrirModalProjeto(
    titulo,
    descricao,
    link
) {

    if (!modalProjeto) {

        return;

    }


    if (tituloModalProjeto) {

        tituloModalProjeto.textContent =
            titulo;

    }


    if (descricaoModalProjeto) {

        descricaoModalProjeto.textContent =
            descricao;

    }


    if (acaoModalProjeto) {

        if (link) {

            acaoModalProjeto.href =
                link;

            acaoModalProjeto.style.display =
                "inline-flex";

        } else {

            acaoModalProjeto.style.display =
                "none";

        }

    }


    modalProjeto.classList.add(
        "aberto"
    );


    document.body.classList.add(
        "modal_aberto"
    );

}


function fecharModal() {

    if (modalProjeto) {

        modalProjeto.classList.remove(
            "aberto"
        );

    }


    document.body.classList.remove(
        "modal_aberto"
    );

}


if (fecharModalProjeto) {

    fecharModalProjeto.addEventListener(
        "click",
        function () {

            fecharModal();

        }
    );

}


if (modalProjeto) {

    modalProjeto.addEventListener(
        "click",
        function (evento) {

            if (
                evento.target ===
                modalProjeto
            ) {

                fecharModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape"
        ) {

            fecharModal();

        }

    }
);


const cartoesProjetos =
    document.querySelectorAll(
        ".cartao_projeto"
    );


cartoesProjetos.forEach(
    function (cartao) {

        cartao.addEventListener(
            "dblclick",
            function () {

                const titulo =
                    cartao.querySelector(
                        "h3, h4"
                    );


                const descricao =
                    cartao.getAttribute(
                        "data-descricao"
                    ) ||

                    "Projeto desenvolvido durante minha jornada de aprendizado em tecnologia.";


                const link =
                    cartao.getAttribute(
                        "data-link"
                    ) || "";


                abrirModalProjeto(

                    titulo
                        ? titulo.textContent
                        : "Meu projeto",

                    descricao,

                    link

                );

            }
        );

    }
);


const barraSuperior =
    document.querySelector(
        ".barra_superior"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!barraSuperior) {

            return;

        }


        if (
            window.scrollY > 30
        ) {

            barraSuperior.classList.add(
                "rolando"
            );

        } else {

            barraSuperior.classList.remove(
                "rolando"
            );

        }

    }
);


const secoesPortfolio =
    document.querySelectorAll(
        ".secao_portfolio"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observador =
        new IntersectionObserver(

            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visivel"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    secoesPortfolio.forEach(
        function (secao) {

            observador.observe(
                secao
            );

        }
    );

}


const larissaPixel =
    document.getElementById(
        "larissaPixel"
    );

const larissaSprite =
    document.getElementById(
        "larissaSprite"
    );

const falaLarissa =
    document.getElementById(
        "falaLarissa"
    );

const tutorialLarissa =
    document.getElementById(
        "tutorialLarissa"
    );

const pularTutorial =
    document.getElementById(
        "pularTutorial"
    );


const pastaLarissa =
    "imagens/larissa/";


const imagensLarissa = {

    idle:
        pastaLarissa +
        "larissa_idle.png",

    walk: [

        pastaLarissa +
        "larissa_walk1.png",

        pastaLarissa +
        "larissa_walk2.png",

        pastaLarissa +
        "larissa_walk3.png",

        pastaLarissa +
        "larissa_walk4.png"

    ]

};


const imagensPreCarregadas = [];


Object.values(
    imagensLarissa
).forEach(
    function (item) {

        if (
            Array.isArray(item)
        ) {

            item.forEach(
                function (src) {

                    const imagem =
                        new Image();

                    imagem.src =
                        src;

                    imagensPreCarregadas.push(
                        imagem
                    );

                }
            );

        } else {

            const imagem =
                new Image();

            imagem.src =
                item;

            imagensPreCarregadas.push(
                imagem
            );

        }

    }
);


let arrastando =
    false;

let tutorialAtivo =
    true;

let tutorialFinalizado =
    false;

let andando =
    false;

let frameAtual =
    0;

let intervaloAnimacao =
    null;

let movimentoTimer =
    null;

let falaTimer =
    null;

let tonturaAtiva =
    false;

let offsetX =
    0;

let offsetY =
    0;

let ultimoX =
    0;

let ultimoY =
    0;

let quantidadeMovimentos =
    0;

let foiArrastado =
    false;

let indiceTutorial =
    0;


const lugaresTutorial = [

    {
        id: "inicio",

        fala:
            "Oii! Eu sou a Larissa. Esse é o meu portfólio!"
    },

    {
        id: "projetos",

        fala:
            "Aqui ficam alguns dos projetos que eu já criei estudando programação."
    },

    {
        id: "carreira",

        fala:
            "Aqui eu conto um pouquinho da minha jornada no COTEMIG e dos meus próximos objetivos."
    },

    {
        id: "habilidades",

        fala:
            "Nessa parte você pode conhecer as tecnologias e habilidades que venho desenvolvendo."
    },

    {
        id: "sobre-mim",

        fala:
            "E aqui tem um pouquinho sobre mim, além da programação."
    },

    {
        id: "laboratorio",

        fala:
            "Esse é o meu laboratório criativo, onde posso testar ideias novas."
    },

    {
        id: "contato",

        fala:
            "E por aqui você pode encontrar meus contatos e redes profissionais."
    }

];


function limitarPosicao(
    x,
    y
) {

    if (!larissaPixel) {

        return {
            x: 0,
            y: 0
        };

    }


    const largura =
        larissaPixel.offsetWidth;

    const altura =
        larissaPixel.offsetHeight;

    const margem =
        10;


    const maxX =
        window.innerWidth -
        largura -
        margem;


    const maxY =
        window.innerHeight -
        altura -
        20;


    return {

        x: Math.max(
            margem,
            Math.min(
                x,
                maxX
            )
        ),

        y: Math.max(
            margem,
            Math.min(
                y,
                maxY
            )
        )

    };

}


function colocarLarissa(
    x,
    y
) {

    if (!larissaPixel) {

        return;

    }


    const posicao =
        limitarPosicao(
            x,
            y
        );


    larissaPixel.style.left =
        posicao.x + "px";


    larissaPixel.style.top =
        posicao.y + "px";

}


function colocarImagem(
    src
) {

    if (!larissaSprite) {

        return;

    }


    larissaSprite.src =
        src;

}


function iniciarAnimacao() {

    if (!larissaSprite) {

        return;

    }


    if (intervaloAnimacao) {

        return;

    }


    andando =
        true;


    frameAtual =
        0;


    colocarImagem(
        imagensLarissa.walk[0]
    );


    intervaloAnimacao =
        setInterval(
            function () {

                if (!andando) {

                    return;

                }


                frameAtual++;


                if (
                    frameAtual >=
                    imagensLarissa.walk.length
                ) {

                    frameAtual =
                        0;

                }


                colocarImagem(

                    imagensLarissa.walk[
                        frameAtual
                    ]

                );

            },
            150
        );

}


function pararAnimacao() {

    andando =
        false;


    if (intervaloAnimacao) {

        clearInterval(
            intervaloAnimacao
        );


        intervaloAnimacao =
            null;

    }


    colocarImagem(
        imagensLarissa.idle
    );

}


function falarLarissa(
    texto,
    duracao = 4500
) {

    if (!falaLarissa) {

        return;

    }


    falaLarissa.textContent =
        texto;


    falaLarissa.classList.add(
        "mostrando"
    );


    posicionarBalao();


    clearTimeout(
        falaTimer
    );


    falaTimer =
        setTimeout(
            function () {

                falaLarissa.classList.remove(
                    "mostrando"
                );

            },
            duracao
        );

}


function posicionarBalao() {

    if (
        !falaLarissa ||
        !larissaPixel
    ) {

        return;

    }


    if (
        !falaLarissa.classList.contains(
            "mostrando"
        )
    ) {

        return;

    }


    const personagem =
        larissaPixel.getBoundingClientRect();


    const balao =
        falaLarissa.getBoundingClientRect();


    let left =
        personagem.left +
        personagem.width / 2 -
        balao.width / 2;


    let top =
        personagem.top -
        balao.height -
        12;


    if (top < 10) {

        top =
            personagem.bottom +
            12;

    }


    left =
        Math.max(
            10,
            Math.min(
                left,
                window.innerWidth -
                balao.width -
                10
            )
        );


    falaLarissa.style.left =
        left + "px";


    falaLarissa.style.top =
        top + "px";

}


function andarAte(
    x,
    y,
    duracao = 1500
) {

    if (!larissaPixel) {

        return;

    }


    const posicao =
        limitarPosicao(
            x,
            y
        );


    iniciarAnimacao();


    larissaPixel.style.transition =
        "left " +
        duracao +
        "ms ease, top " +
        duracao +
        "ms ease";


    larissaPixel.style.left =
        posicao.x + "px";


    larissaPixel.style.top =
        posicao.y + "px";


    clearTimeout(
        andarAte.timer
    );


    andarAte.timer =
        setTimeout(
            function () {

                pararAnimacao();

                posicionarBalao();

            },
            duracao
        );

}


function criarEfeitoTontura() {

    if (
        tonturaAtiva ||
        !larissaPixel
    ) {

        return;

    }


    tonturaAtiva =
        true;


    if (
        !document.getElementById(
            "cssVomitoLarissa"
        )
    ) {

        const estilo =
            document.createElement("style");


        estilo.id =
            "cssVomitoLarissa";


        estilo.textContent = `

            @keyframes vomitoSai {

                0% {
                    height: 0;
                    opacity: 0;
                }

                15% {
                    opacity: 1;
                }

                100% {
                    height: 115px;
                    opacity: 1;
                }

            }


            @keyframes gotaVomito {

                0% {
                    transform:
                        translateY(0)
                        scale(.7);

                    opacity: 0;
                }

                20% {
                    opacity: 1;
                }

                100% {
                    transform:
                        translateY(45px)
                        scale(1);

                    opacity: 0;
                }

            }


            @keyframes pocaAparece {

                0% {
                    transform:
                        scaleX(.1);

                    opacity: 0;
                }

                70% {
                    transform:
                        scaleX(1.1);

                    opacity: 1;
                }

                100% {
                    transform:
                        scaleX(1);

                    opacity: 1;
                }

            }


            @keyframes personagemTonta {

                0% {
                    transform:
                        rotate(0deg);
                }

                20% {
                    transform:
                        rotate(-7deg);
                }

                40% {
                    transform:
                        rotate(7deg);
                }

                60% {
                    transform:
                        rotate(-5deg);
                }

                80% {
                    transform:
                        rotate(5deg);
                }

                100% {
                    transform:
                        rotate(0deg);
                }

            }


            @keyframes respingoPequeno {

                0% {
                    transform:
                        translateY(0)
                        scale(.3);

                    opacity: 0;
                }

                40% {
                    opacity: 1;
                }

                100% {
                    transform:
                        translateY(-18px)
                        scale(1);

                    opacity: 0;
                }

            }

        `;


        document.head.appendChild(
            estilo
        );

    }


    const vomito =
        document.createElement("div");


    vomito.id =
        "vomitoLarissa";


    vomito.style.position =
        "fixed";

    vomito.style.width =
        "70px";

    vomito.style.height =
        "150px";

    vomito.style.zIndex =
        "10001";

    vomito.style.pointerEvents =
        "none";

    vomito.style.overflow =
        "visible";


    document.body.appendChild(
        vomito
    );


    function atualizarPosicaoVomito() {

        if (
            !larissaPixel ||
            !document.body.contains(
                vomito
            )
        ) {

            return;

        }


        const rect =
            larissaPixel.getBoundingClientRect();

        vomito.style.left =
            (
                rect.left +
                rect.width * .50 -
                35
            ) + "px";


        vomito.style.top =
            (
                rect.top +
                rect.height * .43
            ) + "px";

    }


    atualizarPosicaoVomito();


    const cascata =
        document.createElement("div");


    cascata.style.position =
        "absolute";

    cascata.style.left =
        "20px";

    cascata.style.top =
        "0px";

    cascata.style.width =
        "30px";

    cascata.style.height =
        "0px";

    cascata.style.borderRadius =
        "0 0 18px 18px";

    cascata.style.background =
        "linear-gradient(to bottom, #b7ed32, #75c91e)";

    cascata.style.boxShadow =
        "inset 4px 0 rgba(255,255,255,.22), " +
        "0 2px 4px rgba(50,100,10,.25)";

    cascata.style.animation =
        "vomitoSai .75s ease-out forwards";


    vomito.appendChild(
        cascata
    );

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        const gota =
            document.createElement("div");


        gota.style.position =
            "absolute";


        gota.style.width =
            (
                5 +
                Math.random() * 7
            ) + "px";


        gota.style.height =
            (
                8 +
                Math.random() * 12
            ) + "px";


        gota.style.left =
            (
                10 +
                Math.random() * 45
            ) + "px";


        gota.style.top =
            (
                45 +
                Math.random() * 30
            ) + "px";


        gota.style.borderRadius =
            "50%";


        gota.style.background =
            "#8bd626";


        gota.style.animation =
            "gotaVomito " +
            (
                1 +
                Math.random() * .7
            ) +
            "s ease-out " +
            (
                i * .08
            ) +
            "s forwards";


        vomito.appendChild(
            gota
        );

    }


    const pocinha =
        document.createElement("div");


    pocinha.style.position =
        "fixed";

    pocinha.style.width =
        "95px";

    pocinha.style.height =
        "20px";

    pocinha.style.borderRadius =
        "50%";

    pocinha.style.background =
        "radial-gradient(ellipse, #a9e82d 0%, #72bd1d 65%, transparent 72%)";

    pocinha.style.zIndex =
        "10000";

    pocinha.style.pointerEvents =
        "none";

    pocinha.style.animation =
        "pocaAparece .7s ease-out forwards";


    document.body.appendChild(
        pocinha
    );


    function atualizarPocinha() {

        if (
            !larissaPixel ||
            !document.body.contains(
                pocinha
            )
        ) {

            return;

        }


        const rect =
            larissaPixel.getBoundingClientRect();


        pocinha.style.left =
            (
                rect.left +
                rect.width / 2 -
                47
            ) + "px";


        pocinha.style.top =
            (
                rect.top +
                rect.height -
                12
            ) + "px";

    }


    atualizarPocinha();


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const respingo =
            document.createElement("div");


        respingo.style.position =
            "fixed";


        respingo.style.width =
            (
                4 +
                Math.random() * 8
            ) + "px";


        respingo.style.height =
            (
                4 +
                Math.random() * 8
            ) + "px";


        respingo.style.borderRadius =
            "50%";


        respingo.style.background =
            "#91d927";


        respingo.style.zIndex =
            "10001";


        respingo.style.pointerEvents =
            "none";


        respingo.style.animation =
            "respingoPequeno .7s ease-out " +
            (
                Math.random() * .5
            ) +
            "s forwards";


        document.body.appendChild(
            respingo
        );


        const rect =
            larissaPixel.getBoundingClientRect();


        respingo.style.left =
            (
                rect.left +
                rect.width / 2 +
                (Math.random() - .5) * 100
            ) + "px";


        respingo.style.top =
            (
                rect.top +
                rect.height -
                5
            ) + "px";


        setTimeout(
            function () {

                respingo.remove();

            },
            1400
        );

    }


    falarLarissa(
        "NOSSA, QUE TONTURA 😵‍💫",
        3000
    );



    larissaPixel.style.animation =
        "personagemTonta .35s ease-in-out 4";

    const acompanhar =
        setInterval(
            function () {

                if (
                    !document.body.contains(
                        vomito
                    )
                ) {

                    clearInterval(
                        acompanhar
                    );

                    return;

                }


                atualizarPosicaoVomito();

                atualizarPocinha();

            },
            20
        );


    setTimeout(
        function () {

            clearInterval(
                acompanhar
            );


            vomito.style.transition =
                "opacity .5s ease";


            pocinha.style.transition =
                "opacity .7s ease";


            vomito.style.opacity =
                "0";


            pocinha.style.opacity =
                "0";


            larissaPixel.style.animation =
                "";


            setTimeout(
                function () {

                    vomito.remove();

                    pocinha.remove();

                    tonturaAtiva =
                        false;

                },
                1000
            );

        },
        9000
    );

}


if (larissaPixel) {

    larissaPixel.addEventListener(
        "pointerdown",
        function (evento) {

            if (tutorialAtivo) {

                return;

            }


            arrastando =
                true;


            foiArrastado =
                false;


            quantidadeMovimentos =
                0;


            clearTimeout(
                movimentoTimer
            );


            pararAnimacao();


            larissaPixel.style.transition =
                "none";


            const rect =
                larissaPixel.getBoundingClientRect();


            offsetX =
                evento.clientX -
                rect.left;


            offsetY =
                evento.clientY -
                rect.top;


            ultimoX =
                evento.clientX;


            ultimoY =
                evento.clientY;


            larissaPixel.classList.add(
                "sendo_arrastada"
            );


            larissaPixel.setPointerCapture(
                evento.pointerId
            );


            evento.preventDefault();

        }
    );


    larissaPixel.addEventListener(
        "pointermove",
        function (evento) {

            if (!arrastando) {

                return;

            }


            const novaX =
                evento.clientX -
                offsetX;


            const novaY =
                evento.clientY -
                offsetY;

const distancia =
    Math.sqrt(
        Math.pow(
            evento.clientX - ultimoX,
            2
        ) +
        Math.pow(
            evento.clientY - ultimoY,
            2
        )
    );

const velocidade =
    distancia;

          if (distancia > 5) {

    foiArrastado = true;

    if (velocidade > 35) {

        quantidadeMovimentos++;

    }

    ultimoX =
        evento.clientX;

    ultimoY =
        evento.clientY;

}

            colocarLarissa(
                novaX,
                novaY
            );


            posicionarBalao();
            if (
                quantidadeMovimentos >=
                35
            ) {

                quantidadeMovimentos =
                    0;


                criarEfeitoTontura();

            }


            evento.preventDefault();

        }
    );


    larissaPixel.addEventListener(
        "pointerup",
        function (evento) {

            if (!arrastando) {

                return;

            }


            arrastando =
                false;


            larissaPixel.classList.remove(
                "sendo_arrastada"
            );


            if (foiArrastado) {

                verificarSecao();

            }


            evento.preventDefault();

        }
    );


    larissaPixel.addEventListener(
        "pointercancel",
        function () {

            arrastando =
                false;


            larissaPixel.classList.remove(
                "sendo_arrastada"
            );

        }
    );

}

function verificarSecao() {

    if (!larissaPixel) {

        return;

    }


    const personagem =
        larissaPixel.getBoundingClientRect();


    const centroX =
        personagem.left +
        personagem.width / 2;


    const centroY =
        personagem.top +
        personagem.height / 2;


    let encontrou =
        false;


    lugaresTutorial.forEach(
        function (lugar) {

            if (encontrou) {

                return;

            }


            const secao =
                document.getElementById(
                    lugar.id
                );


            if (!secao) {

                return;

            }


            const area =
                secao.getBoundingClientRect();


            const margem =
                130;


            const estaPerto =

                centroX >=
                area.left - margem &&

                centroX <=
                area.right + margem &&

                centroY >=
                area.top - margem &&

                centroY <=
                area.bottom + margem;


            if (estaPerto) {

                falarLarissa(
                    lugar.fala
                );


                encontrou =
                    true;

            }

        }
    );


    if (!encontrou) {

        const frases = [

            "Hmm... você me deixou em um lugar aleatório 😂",

            "Acho que eu me perdi um pouquinho...",

            "Esse lugar não estava no meu mapa 👀",

            "Você me jogou pra longe demais 😭"

        ];


        falarLarissa(

            frases[
                Math.floor(
                    Math.random() *
                    frases.length
                )
            ]

        );

    }

}

function iniciarTutorial() {

    tutorialAtivo =
        true;


    indiceTutorial =
        0;


    falarLarissa(
        lugaresTutorial[0].fala
    );


    setTimeout(
        function () {

            irParaLugarTutorial(0);

        },
        1000
    );

}

function irParaLugarTutorial(
    indice
) {

    if (!tutorialAtivo) {

        return;

    }


    if (
        indice >=
        lugaresTutorial.length
    ) {

        finalizarTutorial();

        return;

    }


    indiceTutorial =
        indice;


    const lugar =
        lugaresTutorial[indice];


    const secao =
        document.getElementById(
            lugar.id
        );


    if (!secao) {

        irParaLugarTutorial(
            indice + 1
        );

        return;

    }


    falarLarissa(
        lugar.fala,
        5000
    );


    secao.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    setTimeout(
        function () {

            if (!tutorialAtivo) {

                return;

            }


            const area =
                secao.getBoundingClientRect();


            const largura =
                larissaPixel.offsetWidth;


            const altura =
                larissaPixel.offsetHeight;


            const destinoX =
                area.left +
                area.width / 2 -
                largura / 2;


            const destinoY =
                area.top -
                altura -
                25;


            andarAte(
                destinoX,
                destinoY,
                1200
            );


        },
        900
    );


    setTimeout(
        function () {

            if (!tutorialAtivo) {

                return;

            }


            if (
                indiceTutorial ===
                indice
            ) {

                irParaLugarTutorial(
                    indice + 1
                );

            }

        },
        5000
    );

}

function finalizarTutorial() {

    tutorialAtivo =
        false;


    tutorialFinalizado =
        true;


    if (tutorialLarissa) {

        tutorialLarissa.style.display =
            "none";

    }


    pararAnimacao();


    falarLarissa(
        "Prontinho! Agora você pode explorar o portfólio sozinho 👀",
        4500
    );


    setTimeout(
        function () {

            falarLarissa(
                "Eu vou ficar andando por aí. Pode me arrastar se quiser 😂",
                4000
            );

        },
        4700
    );


    setTimeout(
        function () {

            iniciarPasseio();

        },
        8500
    );

}

if (pularTutorial) {

    pularTutorial.addEventListener(
        "click",
        function () {

            tutorialAtivo =
                false;


            tutorialFinalizado =
                true;


            if (tutorialLarissa) {

                tutorialLarissa.style.display =
                    "none";

            }


            colocarLarissa(

                window.innerWidth / 2,

                window.innerHeight / 2

            );


            falarLarissa(
                "Tudo bem, sem tutorial Pode explorar!",
                4000
            );


            setTimeout(
                function () {

                    iniciarPasseio();

                },
                4500
            );

        }
    );

}

function iniciarPasseio() {

    if (!tutorialFinalizado) {

        return;

    }


    passeioAleatorio();

}


function passeioAleatorio() {

    if (
        !tutorialFinalizado ||
        tutorialAtivo ||
        arrastando
    ) {

        return;

    }


    const largura =
        larissaPixel.offsetWidth;


    const altura =
        larissaPixel.offsetHeight;


    const margem =
        30;


    const destinoX =
        Math.random()
        *
        (
            window.innerWidth -
            largura -
            margem * 2
        )
        +
        margem;


    const destinoY =
        Math.random()
        *
        (
            window.innerHeight -
            altura -
            70 -
            margem
        )
        +
        margem;


    const atual =
        larissaPixel.getBoundingClientRect();


    const distancia =
        Math.sqrt(

            Math.pow(
                destinoX -
                atual.left,
                2
            )

            +

            Math.pow(
                destinoY -
                atual.top,
                2
            )

        );


    const duracao =
        Math.max(
            1500,
            Math.min(
                4500,
                distancia * 7
            )
        );


    andarAte(
        destinoX,
        destinoY,
        duracao
    );


    clearTimeout(
        movimentoTimer
    );


    movimentoTimer =
        setTimeout(
            function () {

                passeioAleatorio();

            },
            duracao + 2500
        );

}

if (larissaPixel) {

    larissaPixel.addEventListener(
        "click",
        function () {

            if (tutorialAtivo) {

                return;

            }


            if (foiArrastado) {

                foiArrastado =
                    false;

                return;

            }


            const frases = [

                "Oii",

                "Tá gostando do meu portfólio?",

                "Pode clicar nas coisass",

                "Eu fiz tudo isso estudando programação",

                "Uhu meu portfolio lindo",

                "Quer conhecer meus projetos?",

                "Eu tô passeando pelo meu próprio portfólio KKKK",

                "Você me encontrou!"

            ];


            const frase =
                frases[
                    Math.floor(
                        Math.random() *
                        frases.length
                    )
                ];


            falarLarissa(
                frase
            );

        }
    );

}

setInterval(
    function () {

        if (
            falaLarissa &&
            falaLarissa.classList.contains(
                "mostrando"
            )
        ) {

            posicionarBalao();

        }

    },
    50
);

window.addEventListener(
    "resize",
    function () {

        if (!larissaPixel) {

            return;

        }


        const rect =
            larissaPixel.getBoundingClientRect();


        const posicao =
            limitarPosicao(
                rect.left,
                rect.top
            );


        colocarLarissa(
            posicao.x,
            posicao.y
        );


        posicionarBalao();

    }
);

window.addEventListener(
    "load",
    function () {

        if (!larissaPixel) {

            return;

        }

        const id =
            window.location.hash.substring(1);


        if (id) {

            setTimeout(
                function () {

                    irParaSecao(id);

                },
                300
            );

        }

        colocarLarissa(

            70,

            window.innerHeight - 240

        );
        pararAnimacao();

        setTimeout(
            function () {

                iniciarTutorial();

            },
            1000
        );

    }
);