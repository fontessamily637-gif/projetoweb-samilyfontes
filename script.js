let total = 0;

function concluirEstudo() {
    total++;

    document.getElementById("resultado").innerHTML =
        `🎉 Parabéns! Você concluiu ${total} matéria(s)!`;
}