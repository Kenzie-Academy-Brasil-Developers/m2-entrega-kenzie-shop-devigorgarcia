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
            
            
            let produtoObj = Products.createProduct(imageUrl, produto.reviews, produto.productName, produto.price, produto.promotionStatus);

            produtoImg.src = produtoObj.imagem;
            produtoImg.alt = produtoObj.productName;

            for(let i = 0; i < produtoObj.estrelas; i++){
                const spanStars = document.createElement('span')
                spanStars.innerText = "⭐"
                produtoContentStars.appendChild(spanStars)
            }

            produtoContentNome.innerText = produtoObj.descricao;
            produtoContentPreco.innerText = `R$ ${produtoObj.preco.toFixed(2).replaceAll('.',',')}`;
            produtoContentBtn.innerText = "Comprar"

            produtoContent.append(produtoContentStars, produtoContentNome, produtoContentPreco, produtoContentBtn);

            produtoCard.append(produtoImg, produtoContent)

            this.main.appendChild(produtoCard)
        });
    }
}

export default Vitrine