// função que armazena em array nome na tela de cadastro
var dadosLista = [];
var emailLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    let EmailUser = document.getElementById('EmailUser').value;

    if (!checarEmail(EmailUser)) {
        return; 
    }
    if(nomeUser && EmailUser){
        dadosLista.push(nomeUser);
        emailLista.push(EmailUser);
        criarLista();
        //console.log(dadosLista);
        document.getElementById('nomeUser').value = "";
        document.getElementById('EmailUser').value = "";
    }else{
        alert("Por favor, informar o nome e email para cadastro");
    }
}

//função para criar lista
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>nome usuario</th><th>Email</th><th>ações</th></tr>";

    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
        
    }
}
function checarEmail(EmailUser){
    if (EmailUser == "" ||
        EmailUser.indexOf("@") == -1 ||
        EmailUser.indexOf(".") == -1) {
        alert("Por favor informe um email válido");
        return false;
    } else {
        return true;
    }
}
//função para editar nomes da lista
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById('EmailUser').value = emailLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
 // função para excluir nome da lista
 function excluir(i){
    //
    dadosLista.splice((i-1), 1);
    document.getElementById('tabela').deleteRow(i);
    document.getElementById('nomeUser').value = "";
    document.getElementById('EmailUser').value = "";
}
