let inputtext = document.querySelector('#text');
let root = document.querySelector('ul');

let allTodos = [{},{}]

function handlinput(event){
    if(event.keycode === 13 &&
     event.target.value !== "");
    let todo = {
        name: event.target.value,
        isDone: false
    };
    allTodos.push(todo);
    event.target.value = "";


    createUI()
}

inputtext.addEventListener("keyup",handlinput);


function createUI(){
    root.innerHTML = "";
   allTodos.forEach((todo) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = "checkbox";
    input.checked = todo.isDone;
    let p = document.createElement('p');
    p.innerText = todo.name
    let span = document.createElement('span');
    span.innerText = "X"
    li.append(input,p,span);
   root.append(li)
   });
}
createUI();