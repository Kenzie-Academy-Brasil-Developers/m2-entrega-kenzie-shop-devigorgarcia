class Products {
    constructor(imagem, estrelas, descricao, preco, precoPromocao) {
        this.imagem = imagem;
        this.estrelas = estrelas;
        this.descricao = descricao;
        this.preco = preco;
        this.precoPromocao = precoPromocao
    }

    static createProduct(imagem, estrelas, descricao,preco, precoPromocao) {
        const produto = new Products(imagem, estrelas, descricao,preco.productPrice,precoPromocao.productPromotionPrice)
        return produto
    }
}

export default Products