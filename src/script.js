import App from "./controllers/app.js";
import Vitrine from "./models/Vitrine.js";
await App.requisicao();

Vitrine.mostrarVitrine(App.productsData)