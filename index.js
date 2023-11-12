console.log('my app');

const express = require('express');
const routerApi = require('./routes');

const{logErrors, errorHandler}= require('./middlewares/errorHandler')

// Todos los endpoints especificos van antes de los endopoints dinamicos
// es decir todos los endpoints que usen parametros por ejemplo, van siempre al final

const app = express();
const port = 3000;

app.use(express.json());  //middleware

app.get('/', (req, res)=>{
  res.send('wenas server con express')
})

app.get('/new-endpoint', (req, res)=>{
  res.send('nuevo endpoint')
})

routerApi(app);

//colocamos nuestros middlewares de error
//este sera el orden en que se ejecuten uno detras de otro
app.use(logErrors);
app.use(errorHandler);


app.listen(port, () =>{
  console.log('Mi port' + port);
});
