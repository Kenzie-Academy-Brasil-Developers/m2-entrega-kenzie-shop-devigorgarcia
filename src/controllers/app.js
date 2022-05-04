class App {
    static productsData = []
    static async requisicao() {
        await fetch('https://m2-kenzie-shop.herokuapp.com/products').then(Response => Response.json()).then((data)=>{            
            this.productsData = data.products
        })  
    }
}

export default App
