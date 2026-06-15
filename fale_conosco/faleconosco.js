var nome      = document.getElementById("nome");
var email     = document.getElementById("email");
var telefone  = document.getElementById("telefone");
var mensagem  = document.getElementById("mensagem");

var erroNome      = document.getElementById("erroNome");
var erroEmail     = document.getElementById("erroEmail");
var erroTelefone  = document.getElementById("erroTelefone");
var erroMensagem  = document.getElementById("erroMensagem");

var btnContato = document.getElementById("btnContato");

nome.addEventListener("keyup", validarNome);
email.addEventListener("keyup", validarEmail);
telefone.addEventListener("keyup", validarTelefone);
mensagem.addEventListener("keyup", validarMensagem);
btnContato.addEventListener("click", enviarFormulario);


function contarCaracteres(texto){
    var contador = 0;
    for(var i = 0; texto[i] != undefined; i++) contador++;
    return contador;
}


function validarNome(){
    var quantidade = contarCaracteres(nome.value);

    if(quantidade <10){
        erroNome.innerHTML = "Digite seu nome e sobrenome";
        return false;
    }
    if(quantidade > 50){
        erroNome.innerHTML = "Máximo de 50 caracteres.";
        return false;
    }

    erroNome.innerHTML = "";
    return true;
}


function validarEmail(){
    var texto = email.value;
    var quantidade = contarCaracteres(texto);
    var contadorArroba = 0;
    var contadorPonto = 0;

    for(var i = 0; texto[i] != undefined; i++){
        if(texto[i] == "@") contadorArroba++;
        if(texto[i] == ".") contadorPonto++;
    }

    if(quantidade > 80){
        erroEmail.innerHTML = "Máximo de 80 caracteres.";
        return false;
    }
    if(contadorArroba != 1){
        erroEmail.innerHTML = "Digite seu email corretamente";
        return false;
    }
    if(contadorPonto < 1){
        erroEmail.innerHTML = "O email deve possuir pelo menos um ponto.";
        return false;
    }

    erroEmail.innerHTML = "";
    return true;
}


function validarTelefone(){
    var texto = telefone.value;
    var quantidade = contarCaracteres(texto);
    var contadorNumeros = 0;

    for(var i = 0; texto[i] != undefined; i++){
        if(texto[i] >= "0" && texto[i] <= "9") contadorNumeros++;
    }

    if(quantidade < 11){                               // ← mínimo adicionado
        erroTelefone.innerHTML = "Digite os 11 números (DDD + número).";
        return false;
    }
    if(quantidade > 11){
        erroTelefone.innerHTML = "Máximo de 11 números.";
        return false;
    }
    if(contadorNumeros != quantidade){
        erroTelefone.innerHTML = "Digite apenas números.";
        return false;
    }
    if(texto[2] != "9"){                               // ← duplicata removida
        erroTelefone.innerHTML = "Após o DDD, o número deve começar com 9.";
        return false;
    }

    erroTelefone.innerHTML = "";
    return true;
}


function validarMensagem(){                            // ← função criada
    var quantidade = contarCaracteres(mensagem.value);

    if(quantidade < 10){
        erroMensagem.innerHTML = "Digite pelo menos 10 caracteres.";
        return false;
    }
    if(quantidade > 500){
        erroMensagem.innerHTML = "Máximo de 500 caracteres.";
        return false;
    }

    erroMensagem.innerHTML = "";
    return true;
}


function enviarFormulario(){
    var nomeValido      = validarNome();
    var emailValido     = validarEmail();
    var telefoneValido  = validarTelefone();
    var mensagemValida  = validarMensagem();

    var quantidadeErros = 0;

    if(!nomeValido)     quantidadeErros++;
    if(!emailValido)    quantidadeErros++;
    if(!telefoneValido) quantidadeErros++;
    if(!mensagemValida) quantidadeErros++;

    if(quantidadeErros == 0){
        alert("Mensagem enviada com sucesso!");

    }else if(quantidadeErros > 1){
        alert("Existem campos preenchidos incorretamente.");

    }else{
        if(!nomeValido)     alert("Verifique o campo Nome.");
        if(!emailValido)    alert("Verifique o campo Email.");
        if(!telefoneValido) alert("Verifique o campo Telefone.");
        if(!mensagemValida) alert("Verifique o campo Mensagem.");
    }
}