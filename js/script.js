const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const criptografaBtn = document.getElementById("criptografar-btn");
const descriptografaBtn = document.getElementById("descriptografar-btn");


criptografaBtn.addEventListener('click', function() {
    removeImagensParaExibirOutput();
    textOutput.innerHTML = `
    <p>${criptografa(textInput.value)}</p>
    <input class="btn" id="copiar-btn" type="button" value="copiar">
    `
});

descriptografaBtn.addEventListener('click', function() {
    removeImagensParaExibirOutput();
    textOutput.innerHTML = `
    <p>${descripta(textInput.value)}</p>
    <input class="btn" id="copiar-btn" type="button" value="copiar">`
});


function removeImagensParaExibirOutput() {
    let imagens = textOutput.getElementsByTagName("img");
    let qtdImages = Array.from(imagens);

    qtdImages.forEach(img => {
        img.remove();
    });
}

console.log(descripta("haingzhoberufat"));

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

function descripta(textInput) {
    let strDescriptada = "";
    for(let i = 0; i < textInput.length; i++) {
        switch(textInput[i]) {
            case 'e':
                if(textInput.slice(i, i+5) === "enter") {
                    strDescriptada+="e";
                    i+=4
                } else {
                    strDescriptada+="";
                }
            break;
            case 'i':
                if(textInput.slice(i, i+4) === "imes") {
                    strDescriptada+="i";
                    i+=3;
                } else {
                    strDescriptada+="";
                }
            break;
            case 'a':
                if(textInput.slice(i, i+2) === "ai") {
                    strDescriptada+="a";
                    i+=1;
                } else {
                    strDescriptada+="";
                }
            break;
            case 'o':
                if(textInput.slice(i, i+4) === "ober") {
                    strDescriptada+="o";
                    i+=3;
                } else {
                    strDescriptada+="";
                }
            break;
            case 'u':
                if(textInput.slice(i, i+4) === "ufat") {
                    strDescriptada+="u";
                    i+=3;
                } else {
                    strDescriptada+="";
                }
            break;
            default:
                strDescriptada+=textInput[i];
        }
    }
    return strDescriptada;
}



/* 

A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/