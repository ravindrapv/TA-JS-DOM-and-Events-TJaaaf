function main(){
    let inputtext = document.querySelector("#text");
let root = document.querySelector("ul");

let allTodos = [{}, {}];

function handlinput(event) {
  if (event.keyode === 13 && 
    event.target.value !== "");
  let todo = {
    name: event.target.value,
    isDone: false,
  };
  allTodos.push(todo);
  event.target.value = "";

  createUI();
}

function handleDelet(event){
   let id = event.target.dataset.id

   allTodos.splice(id,1);
   createUI()
}

function hanleTogale(event) {
   let id = event.target.dataset.id;
   allTodos[id].isDone = !allTodos[id].isDone;

   createUI();
}

function createUI() {
  root.innerHTML = "";
  allTodos.forEach((todo,index) => {
    let li = document.createElement("li");
    li.classList.add("flex");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;
    input.setAttribute('data-id', index)
    input.addEventListener('input', hanleTogale)
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "X";
    li.append(input, p, span);
    root.append(li);


    span.addEventListener("click",handleDelet)
    span.setAttribute("data-id" , index)
  });
}
inputtext.addEventListener("keyup", handlinput);
}

main();