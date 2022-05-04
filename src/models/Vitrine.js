import Products from "./Products.js";

class Vitrine {
    static main = document.querySelector('#main');

    static mostrarVitrine (produtos){
        produtos.forEach((produto) => {
            const produtoCard = document.createElement('div');
            const produtoImg = document.createElement('img');
            const produtoContent = document.createElement('div');
            const produtoContentStars = document.createElement('div')
            const produtoContentNome = document.createElement('p');
            const produtoContentPreco = document.createElement('span');
            const produtoContentBtn = document.createElement('button');

            produtoCard.classList.add('produto-Card');
            produtoContent.classList.add('produto-Content');
            produtoContentStars.classList.add('ratingHolder')
            produtoContentNome.classList.add('produto-content-nome');
            produtoContentPreco.classList.add('produto-content-preco');
            produtoContentBtn.classList.add('produto-content-btn');
            
            const imageUrl = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${produto.id}/Image.png`;
            
            
            let produtoObj = Products.createProduct(imageUrl, null, produto.productName, produto.price, produto.price);

            produtoImg.src = produtoObj.imagem;
            produtoImg.alt = produtoObj.productName;

            produtoContentNome.innerText = produtoObj.descricao;
            produtoContentPreco.innerText = `R$ ${produtoObj.preco},00`;
            produtoContentBtn.innerText = "Comprar"

            produtoContent.append(produtoContentStars, produtoContentNome, produtoContentPreco, produtoContentBtn);

            produtoCard.append(produtoImg, produtoContent)

            this.main.appendChild(produtoCard)
        });
    }
}

export default Vitrine