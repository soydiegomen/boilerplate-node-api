//http://mongoosejs.com/docs/index.html
const mongoose = require('mongoose');
//Crea la conexión
//mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://localhost/test', function(err, res) {
  if(err) {
  	console.log('Some error happend');
  	throw err;
  }
  console.log('Connected to Database');
});

var db = mongoose.connection;
//Agrega un handller en caso de haber un error en la conexión
db.on('error', console.error.bind(console, 'connection error:'));
//Abre la conexión
db.once('open', function() {
  // we're connected!
  console.log('We are connected!');
});

//Crea un nuevo esquema
var kittySchema = mongoose.Schema({
  name: String
});

//Crea un nuevo modelo en el esquema 
var Kitten = mongoose.model('Kitten', kittySchema);

//Instancia un nuevo modelo
var fluffy = new Kitten({ name: 'bolita' });

//Guarda un registro de la instnacia
/*fluffy.save(function (err, fluffy) {
    if (err) 
      return console.error(err);
    console.log(fluffy.name + " was saved");
});*/

//Define la funcion que se ejecutará al hacer una busqueda
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

//Callback que se ejecutará después de hacer la busqueda
var callback = function (){
  console.log('The code is end');
}

//Obtiene los que tienen el name = fluffy
//Kitten.find({ name: 'fluffy' }, callback);
//Obtiene todos los registros
Kitten.find({ }, callback);
