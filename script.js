let brainNormal;
let brainRobot;
let maskRadius = 75;  // Tamanho da área revelada pelos raios
let imgX, imgY, imgW, imgH;
let normalLayer;

function preload() {
    brainNormal = loadImage('cerebro-normal.jpg');  // Imagem do cérebro normal
    brainRobot = loadImage('cerebro-robotico.jpg');  // Imagem do cérebro robótico
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();

    let aspectRatio = brainNormal.width / brainNormal.height;

    if (windowWidth / windowHeight > aspectRatio) {
        imgW = windowHeight * aspectRatio;
        imgH = windowHeight;
    } else {
        imgW = windowWidth;
        imgH = windowWidth / aspectRatio;
    }

    imgX = (windowWidth - imgW) / 2;
    imgY = (windowHeight - imgH) / 2;

    // Criar a layer para a imagem normal
    normalLayer = createGraphics(width, height);
}

function draw() {
    background(0);  // Fundo preto

    // Desenhar o cérebro robótico como fundo
    image(brainRobot, imgX, imgY, imgW, imgH);

    // Preparar a layer normal
    normalLayer.clear();  // Limpa o layer
    normalLayer.image(brainNormal, imgX, imgY, imgW, imgH);

    // Aplicar a área revelada em torno do mouse
    normalLayer.erase();
    normalLayer.ellipse(mouseX, mouseY, maskRadius * 2, maskRadius * 2);
    normalLayer.noErase();

    // Desenhar a layer normal
    image(normalLayer, 0, 0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    let aspectRatio = brainNormal.width / brainNormal.height;
    if (windowWidth / windowHeight > aspectRatio) {
        imgW = windowHeight * aspectRatio;
        imgH = windowHeight;
    } else {
        imgW = windowWidth;
        imgH = windowWidth / aspectRatio;
    }

    imgX = (windowWidth - imgW) / 2;
    imgY = (windowHeight - imgH) / 2;

    normalLayer.resizeCanvas(width, height);
}
