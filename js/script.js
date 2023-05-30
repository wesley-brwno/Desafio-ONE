const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const criptografaBtn = document.getElementById("criptografar-btn");
const descriptografaBtn = document.getElementById("descriptografar-btn");
let textoCopia;


criptografaBtn.addEventListener('click', function() {
    removeImagensParaExibirOutput();
    textOutput.innerHTML = `
    <p>${criptografa(textInput.value)}</p>
    <input class="btn" id="copiar-btn" type="button" value="copiar">`
    textoCopia = criptografa(textInput.value);
    adicionaEventoCopiar();
});

descriptografaBtn.addEventListener('click', function() {
    removeImagensParaExibirOutput();
    textOutput.innerHTML = `
    <p id="txtSaida">${descripta(textInput.value)}</p>
    <input class="btn" id="copiar-btn" type="button" value="Copiar">`
    textoCopia = descripta(textInput.value);
    adicionaEventoCopiar(); 
});

function adicionaEventoCopiar() {
    const copiarBtn = document.getElementById("copiar-btn");
    copiarBtn.addEventListener('click', copiarTexto);
}


function removeImagensParaExibirOutput() {
    let imagens = textOutput.getElementsByTagName("img");
    let qtdImages = Array.from(imagens);

    qtdImages.forEach(img => {
        img.remove();
    });
}


function validaEntrada(inputText) {
    let pattern = /^[a-z0-9\s]+$/;

    if (pattern.test(inputText.value.toLowerCase())) {
        console.log("chegou aki")
      inputText.classList.remove('invalid');
      abilitaButao();
      console.log("Texto válido");
    } else {
      inputText.classList.add('invalid');
      desabilitaButao();
      console.log("Texto inválido");
    }

    console.log("abriu funcao")
}

function abilitaButao() {
    criptografaBtn.disabled = false;
    criptografaBtn.classList.remove('invalid');
    descriptografaBtn.disabled = false;
    descriptografaBtn.classList.remove('invalid');
}

function desabilitaButao() {
    criptografaBtn.disabled = true;
    criptografaBtn.classList.add('invalid');
    descriptografaBtn.disabled = true;
    descriptografaBtn.classList.add('invalid');
}

function copiarTexto() {
    // Seleciona o elemento <p> pelo ID
    const elementoTexto = textoCopia;
  
    // Cria um objeto de área de transferência
    const areaTransferencia = document.createElement("textarea");
    areaTransferencia.value = elementoTexto;
  
    // Adiciona o objeto de área de transferência ao documento
    document.body.appendChild(areaTransferencia);
  
    // Seleciona o texto dentro da área de transferência
    areaTransferencia.select();
  
    // Copia o texto para a área de transferência
    document.execCommand("copy");
  
    // Remove a área de transferência do documento
    document.body.removeChild(areaTransferencia);
  
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
