
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
// document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
// section.style.color = generateRandomColor() // -> #34c7aa

function generateRandomNum(){
    let randomNum = Math.floor((Math.random() * 500) + 1);
    return randomNum;
  };


let boxs = document.querySelectorAll('.box');
let add =  function addevent(){
    boxs.forEach((v) =>{
        let randomClr = generateRandomColor() 
        v.style.backgroundColor = randomClr
})
}

  addEventListener('mousemove',add);


//   let h1 = document.querySelectorAll('.h1');

   let randNum = function addNum(){
       boxs.forEach((e) => {
           let randomNumber = generateRandomNum()
           e.innerText = randomNumber
       })
   }

   addEventListener('mousemove',randNum);
