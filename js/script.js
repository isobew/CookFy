//fazendo a requisição http para pegar os dados da API
function info(url){
    url = 'https://randomuser.me/api/'
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;  
}

//definindo as variáveis e constantes
const data = info();
let users = JSON.parse(data).results[0];
let firstName = users.name.first;
let lastName = users.name.last;
let fullName = `${firstName} ${lastName}`
let headerName = document.getElementById('header-name');
let userAvatar = document.getElementById('user-avatar');
let welcomeUser = document.getElementById('header-welcome-name-user');
let welcomeMessage = document.getElementById('welcome');

//setando o nome do usuário no header
headerName.innerHTML = firstName;

//verificando se o usuário é do gênero feminino ou masculino para exibir o avatar e mensagem de boas-vindas correspondente 
if(users.gender == 'male'){
    userAvatar.setAttribute('src', './assets/Avatar_masculino.svg');
    welcomeMessage.innerHTML = "Bem vindo de volta";
}else if(users.gender == 'female'){
    userAvatar.setAttribute('src', './assets/Avatar_feminino.svg');
    welcomeMessage.innerHTML = "Bem vinda de volta";
}

//inserindo o nome completo do usuário na mensagem de boas-vindas
welcomeUser.innerHTML = fullName;


console.log(users)
