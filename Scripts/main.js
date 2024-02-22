var escondido = false;

function reset(name) {
    const elementB = document.getElementById(name);
    elementB.blur();
}

function esconder()
{
    if (!escondido)
    {
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
    reset("buttonE");
    if (validarTextArea())
    {
        esconder();
    }
}

function desencriptar() {
    reset("buttonD");
    if (validarTextArea())
    {
        esconder();
    }
}

function copiar() {
    reset("buttonC");
    console.log("Copiado");
}