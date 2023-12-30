console.log('my app');

const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const{logErrors, errorHandler, BoomErrorHandler,QueryErrorHandler}= require('./middlewares/errorHandler')

// Todos los endpoints especificos van antes de los endopoints dinamicos
// es decir todos los endpoints que usen parametros por ejemplo, van siempre al final

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  //middleware

const whithelist =['http://localhost:3000', 'http://myfrontend.co', 'null']
const options = {
 origin: (origin, callback) => {
  if (whithelist.includes(origin) || !origin){
    callback(null, true);
  } else {
    callback(new Error('Origin "'+origin+'" not allowed'));

  }
 }
}
app.use(cors(options));

app.get('/api', (req, res)=>{
  res.sendFile(__dirname + "/index.html")
});

app.get('/api/new-endpoint', (req, res)=>{
  res.send('nuevo endpoint')
});



routerApi(app);

//colocamos nuestros middlewares de error
//este sera el orden en que se ejecuten uno detras de otro
app.use(logErrors);
app.use(QueryErrorHandler)
app.use(BoomErrorHandler);
app.use(errorHandler);


app.listen(port, () =>{
  console.log('Mi port' + port);
});
