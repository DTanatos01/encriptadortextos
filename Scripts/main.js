var escondido = false;
var visto = true;

function reset(name) {
    const elementB = document.getElementById(name);
    elementB.blur();
}

function esconder()
{
    if (!escondido)
    {
        visto = false;
        escondido = true;
        const elementA1 = document.getElementById("sinTexto");
        const elementA2 = document.getElementById("sinTexto2");
        const elementA3 = document.getElementById("sinTexto3");
        const elementA4 = document.getElementById("restCaptura");
        const elementA5 = document.getElementById("botones2");
        elementA1.style.display = 'none';
        elementA2.style.display = 'none';
        elementA3.style.display = 'none';
        elementA4.style.display = 'block';
        elementA5.style.display = 'flex';
    }
}

function mostrar()
{
    if (!visto)
    {
        visto = true;
        escondido = false;
        const elementA1 = document.getElementById("sinTexto");
        const elementA2 = document.getElementById("sinTexto2");
        const elementA3 = document.getElementById("sinTexto3");
        const elementA4 = document.getElementById("restCaptura");
        const elementA5 = document.getElementById("botones2");
        elementA1.style.display = 'block';
        elementA2.style.display = 'block';
        elementA3.style.display = 'block';
        elementA4.style.display = 'none';
        elementA5.style.display = 'none';
    }
}

function validarTextArea()
{
    let elementB1 = document.getElementById("capturador");
    if (elementB1.value == null || elementB1.value.trim() === "")
    {
        return false;
    } else
    {
        return true;
    }
}

function encriptar() {
    document.getElementById("restCaptura").value = "";
    reset("buttonE");
    if (validarTextArea())
    {
        let elementC = document.getElementById("capturador").value;
        var nuevoTexto = "";
        for (i = 0; i < elementC.length; i++)
        {
            var char = elementC[i];
            switch (char) {
                case 'a':
                    nuevoTexto = nuevoTexto + "ai";
                    break;
                case 'e':
                    nuevoTexto = nuevoTexto + "enter";
                    break;    
                case 'i':
                    nuevoTexto = nuevoTexto + "imes";
                    break;
                case 'o':
                    nuevoTexto = nuevoTexto + "ober";
                    break;
                case 'u':
                    nuevoTexto = nuevoTexto + "ufat";
                    break;
                default:
                    nuevoTexto = nuevoTexto + char;
                    break;
            }
        }
        console.log(nuevoTexto);
        document.getElementById("restCaptura").value = nuevoTexto;
        esconder();
    } else 
    {
        mostrar();
    }
}

function desencriptar() {
    document.getElementById("restCaptura").value = "";
    reset("buttonD");
    if (validarTextArea())
    {
        let elementC = document.getElementById("capturador").value;
        var nuevoTexto = elementC.replace(/enter/g, "e");
        nuevoTexto = nuevoTexto.replace(/imes/g, "i");
        nuevoTexto = nuevoTexto.replace(/ai/g, "a");
        nuevoTexto = nuevoTexto.replace(/ober/g, "o");
        nuevoTexto = nuevoTexto.replace(/ufat/g, "u");
        console.log(nuevoTexto);
        document.getElementById("restCaptura").value = nuevoTexto;
        esconder();
    } else 
    {
        mostrar();
    }
}

function copiar() {
    reset("buttonC");
    console.log("Copiado");
    copiarContenido();
}

async function copiarContenido() {
    try {
      await navigator.clipboard.writeText(document.getElementById("restCaptura").value);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }