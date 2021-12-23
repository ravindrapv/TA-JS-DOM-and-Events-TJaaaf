let form = document.querySelector('form');

let userInfo = {};

function handler(event) {
    event.preventDefault();
    userInfo.name = form.elements.name.value
    userInfo.email = form.elements.email.value
    userInfo.gender= form.elements.gender.value
    userInfo.color = form.elements.color.value
    userInfo.range = form.elements.range.value
    userInfo.fiction= form.elements.fiction.value
    userInfo.terms = form.elements.terms.value
}

form.addEventListener('submit',handler);

let button = document.querySelector('button');

function handlerkey(){
    let display = userInfo;
    let div = document.createElement('div');
    div.classList = ('form-control')
    let li = document.createElement('li');
    div.append('li');
    li.innerText = display;
    console.log(display)
}

    button.addEventListener('click',handlerkey);