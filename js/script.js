function teste(url){
    url = 'https://randomuser.me/api/'
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;  
}

let data = teste();
let users = JSON.parse(data).results[0];

console.log(users)

console.log(users.name.first)
console.log(users.name.last)