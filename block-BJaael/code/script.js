let hexa = ("1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

let color = "#"

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
section.style.color = generateRandomColor() // -> #34c7aa