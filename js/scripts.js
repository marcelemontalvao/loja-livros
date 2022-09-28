function createLi(element) {

    let li = document.createElement("li")
    li.classList.add("card");

    let img = document.createElement("img")
    img.src = element.image;
    
    let central = document.createElement("li");
    central.classList.add("centralizado");

    let nome = document.createElement("h1");
    nome.innerText = element.name;

    let preco = document.createElement("p");
    preco.innerText = element.price;
    
    central.append(nome,preco);
    li.append(img, central);
    return li;
}

function renderLi(itens) {
    let cardsFrames = document.querySelector(".cards-frames")
    let cardsFigures = document.querySelector(".cards-figures");
    
    itens.forEach(element => {
        if(element.type == "distopia") {
            cardsFigures.append(createLi(element));
        } else {
            cardsFrames.append(createLi(element));
        }
    });
}
   
renderLi(itens);