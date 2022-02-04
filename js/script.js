function teste(url){
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText
}

alert(teste('https://randomuser.me/api/'));