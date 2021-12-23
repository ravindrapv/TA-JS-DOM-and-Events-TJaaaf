let form = document.querySelector('form');
let model = document.querySelector('.overlay')

let userInfo = {};

function handler(event) {
    event.preventDefault();

    let elements = event.target.elements
    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;
    userInfo.range = elements.range.value;
    userInfo.book = elements.book.value;
    userInfo.terms = elements.terms.value;
}

form.addEventListener('submit',handler);

let button = document.querySelector('button');

function handlerkey(){
    let display = userInfo;
    let div = document.createElement('div');
    div.classList.add('overlay');
    let li = document.createElement('li');
    div.append('li');
    li.innerText = display;
    console.log(display)
}

    button.addEventListener('click',handlerkey);