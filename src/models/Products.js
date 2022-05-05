class Products {
    constructor(imagem, estrelas, descricao, preco) {
        this.imagem = imagem;
        this.estrelas = estrelas;
        this.descricao = descricao;
        this.preco = preco;
    }

    static createProduct(imagem, estrelas, descricao,preco, promocaoStatus) {
        if(promocaoStatus === true) {
            const produto = new Products(imagem, estrelas, descricao,preco.productPromotionPrice)    
            return produto
        } else {
            const produto = new Products(imagem, estrelas, descricao,preco.productPrice)
            return produto
        }
    }
}

export default Products