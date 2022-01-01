let venkataravindraImgs = [
    "https://www.lovethispic.com/uploaded_...",
    "https://media1.popsugar-assets.com/fi...",
    "https://www.cliccamaqua.com.br/images...",
    "https://observatoriodocinema.uol.com....",
    "https://upload.wikimedia.org/wikipedi...",
    "https://exame.com/wp-content/uploads/...",
    "https://conteudo.imguol.com.br/c/entr...",
    "https://i0.wp.com/mixdeseries.com.br/...",
  ];


const imgs = document.getElementsByTagName("img");

for(let i=0; i<imgs.length; i++){
    const randomImg = Math.floor(Math.random() * venkataravindraImgs.length);
    imgs[i].src = venkataravindraImgs[randomImg];
}

const header = document.getElementsByTagName("h1");

for(let i=0; i<header.length; i++){
  header[i].innerText = "venkatravindra";
}