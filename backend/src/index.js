const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
// const app = express(); para iniciar a api
app.use(bodyParser.json()); //para entender json
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

//urlencoded para ele entender parâmetros via url
//app.listen = porta que eu quero ouvir

require('./app/controllers/index')(app);

console.log('api ok')

app.listen(3000)

