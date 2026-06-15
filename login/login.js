const USUARIO_CORRETO = "Edson";
const SENHA_CORRETA = "1234";

const btnEntrar = document.getElementById('btn-entrar');
const msgErro = document.getElementById('msg-erro');
const campoUsuario = document.getElementById('campo-usuario');
const campoSenha = document.getElementById('campo-senha');

document.getElementById('toggle-senha').addEventListener('change', function() {
    campoSenha.type = this.checked ? 'text' : 'password';
});

btnEntrar.addEventListener('click', function() {
    const usuario = campoUsuario.value.trim();
    const senha = campoSenha.value.trim();

    if (usuario === '' || senha === '') {
        mostrarErro('Preencha todos os campos.');
        return;
    }

    if (usuario === USUARIO_CORRETO && senha === SENHA_CORRETA) {
        window.location.href = './dashboard.html';
    } else {
        mostrarErro('Usuario ou senha incorretos.');
    }
});

function mostrarErro(mensagem) {
    msgErro.textContent = mensagem;
    msgErro.style.display = 'block';

    setTimeout(function() {
        msgErro.style.display = 'none';
    }, 3000);
}
 
