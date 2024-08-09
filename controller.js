// validar acesso em tela de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert("favor preencher todos os campos")
    }else{
        //alert("campos preenchidos com sucesso")
        window.location.href = 'cadastro.html'
    }
}

// função que armazena em array nome na tela de cadastro
var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        criarLista()
        //console.log(dadosLista);
        document.getElementById('nomeUser').value = "";
    }else{
        alert("favor informar o nome para cadastro");
    }
}
//função para criar lista
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>nome usuario</th><th>ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
//função para editar nomes da lista
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
 // função para excluir nome da lista
 function excluir(i){
    //
    dadosLista.splice((i-1), 1);
    document.getElementById('tabela').deleteRow(i);
    document.getElementById('nomeUser').value = "";
 }