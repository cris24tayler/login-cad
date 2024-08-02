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
        //console.log(dadosLista);
        document.getElementById('nomeUser').value = "";
    }else{
        alert("favor informar o nome para cadastro");
    }
}
//função para criar lista