const express = require('express');
const prodtRouter = require('./router/prodtRouter');
const routerSale = require('./router/routerSale');

const app = express();
app.use(express.json());

app.use('/products', prodtRouter);
app.use('/sales', routerSale);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;