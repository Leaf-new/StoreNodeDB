console.log('my app');

const express = require('express');
const routerApi = require('./routes');


// Todos los endpoints especificos van antes de los endopoints dinamicos
// es decir todos los endpoints que usen parametros por ejemplo, van siempre al final

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('wenas server con express')
})

app.get('/new-endpoint', (req, res)=>{
  res.send('nuevo endpoint')
})

routerApi(app);


app.listen(port, () =>{
  console.log('Mi port' + port);
});
