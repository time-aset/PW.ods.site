function enviar() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const doacao = document.getElementById('doacao').value.trim();

    limparErros();

    let valido = true;

    if (!nome) {
        mostrarPopup('Erro', 'Informe seu nome.');
        valido = false;
    }

    if (!mensagem) {
        mostrarPopup('Erro', 'Escreva uma mensagem.');
        valido = false;
    }

    if (!email) {
        mostrarErro('emailErro', 'Informe seu e-mail.');
        valido = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        mostrarErro('emailErro', 'Informe um e-mail válido.');
        valido = false;
    }

    if (!doacao) {
        mostrarErro('doacaoErro', 'Informe o valor da doação.');
        valido = false;
    } else if (Number(doacao) <= 0) {
        mostrarErro('doacaoErro', 'A doação precisa ser maior que zero.');
        valido = false;
    }

    if (!valido) {
        return;
    }

    mostrarPopup('Obrigado!', 'Sua doação foi registrada com sucesso.');
}

function mostrarErro(id, mensagem) {
    document.getElementById(id).textContent = mensagem;
}

function limparErros() {
    document.getElementById('emailErro').textContent = '';
    document.getElementById('doacaoErro').textContent = '';
}

function mostrarPopup(titulo, mensagem) {
    document.getElementById('popupTitulo').textContent = titulo;
    document.getElementById('popupMensagem').textContent = mensagem;
    document.getElementById('popupDoar').style.display = 'flex';
}

function fecharPopupDoar() {
    document.getElementById('popupDoar').style.display = 'none';
}

function limparErro(id) {
    document.getElementById(id).textContent = '';
}
