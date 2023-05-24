const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const criptografaBtn = document.getElementById("criptografar-btn");


criptografaBtn.addEventListener('click', function() {
    removeImagensParaExibirOutput();
    textOutput.innerHTML = `
    <p>${criptografa(textInput.value)}</p>
    <input class="btn" id="copiar-btn" type="button" value="copiar">
    `
});

function removeImagensParaExibirOutput() {
    let imagens = textOutput.getElementsByTagName("img");
    let qtdImages = Array.from(imagens);

    qtdImages.forEach(img => {
        img.remove();
    });
}

function criptografa(textInput) {
    let strCriptada="";
    for(let i = 0; i < textInput.length; i++) {
        switch(textInput[i]) {
            case 'e':
                strCriptada+="enter";
            break;
            case 'i':
                strCriptada+="imes";
            break;
            case 'a':
                strCriptada+="ai";
            break;
            case 'o':
                strCriptada+="ober";
            break;
            case 'u':
                strCriptada+="ufat"
            break
            default:
                strCriptada+=textInput[i];
        } 
    }
    return strCriptada;
}



/* 

A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/