let input = document.querySelector('input');
let form = document.querySelector('form');
let model = document.querySelector('.model')
let store = {}


function displayinfo(data = {}) {
    input.innerText = data.text
}

function handler(event){
    event.preventDefault();
    store =  event.target.elements.text.value
    model.classList.add("open");
    model.append('input');
    displayinfo(store);
    console.log(store);
};
input.addEventListener("submit",handler);
